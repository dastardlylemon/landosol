export default {
  Query: {
    character: async (_, { id }: { id: string }, { models }) => {
      return await models.Character.findByPk(id);
    },
    characters: async (_1, _2, { models }) => {
      return await models.Character.findAll();
    },
  },

  Character: {
    guild: async (character, _, { models }) => {
      return await models.Guild.findByPk(character.guildId);
    },
  },
};

