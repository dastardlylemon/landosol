import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
app.use(cors());

const schema = gql`
  type Query {
    me: Character
  }

  type Character {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        id: 1,
        name: 'Maho',
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo server listening on http://localhost:8000/graphql');
});
