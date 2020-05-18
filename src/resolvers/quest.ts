import { Resolvers } from '../types';

const resolvers: Resolvers = {
  Query: {
    quest: async (_, { id }: { id: string }, { models }) => {
      return await models.Quest.findByPk(id);
    },
    quests: async (_1, _2, { models }) => {
      return await models.Quest.findAll();
    },
  },

  Quest: {
    waves: async (quest, _, { models }) => {
      return null;
    },
  },
};

export default resolvers;
