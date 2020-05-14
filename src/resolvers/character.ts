export default {
  Query: {
    character: (_, { id }: { id: string }, { models }) => {
      return models.characters[id];
    },
    characters: (_1, _2, { models }) => {
      return Object.values(models.characters);
    },
  },

  Character: {
    guild: (character, _, { models }) => {
      return models.guilds[character.guildId];
    },
  },
};

