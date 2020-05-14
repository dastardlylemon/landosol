export default {
  Query: {
    guild: (_, { id }: { id: string }, { models }) => {
      return models.guilds[id];
    },
    guilds: (_1, _2, { models }) => {
      return Object.values(models.guilds);
    },
  },

  Guild: {
    leader: (guild, _, { models }) => {
      return models.characters[guild.leaderId];
    },
    members: (guild, _, { models }) => {
      return Object.values(models.characters).filter((character) => character.guildId === guild.id);
    },
  },
};

