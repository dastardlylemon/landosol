import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import DataLoader from 'dataloader';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';
import loaders from './loaders';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    loaders: {
      characterProfile: new DataLoader((keys) => loaders.batchCharacterProfiles(keys, models)),
      equipment: new DataLoader((keys) => loaders.batchEquipments(keys, models)),
      equipmentRecipe: new DataLoader((keys) => loaders.batchEquipmentRecipes(keys, models)),
      guild: new DataLoader((keys) => loaders.batchGuilds(keys, models)),
    },
  },
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
  app.listen({ port: 8000 }, () => {
    console.log('Apollo server listening on http://localhost:8000/graphql');
  });
});
