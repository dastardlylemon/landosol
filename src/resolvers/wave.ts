import { Resolvers } from '../types';

const resolvers: Resolvers = {
  Query: {
    wave: async (_, { id }: { id: string }, { models }) => {
      return await models.Guild.findByPk(id);
    },
    questg: async (_1, _2, { models }) => {
      return await models.Guild.findAll();
    },
  },

  Guild: {
    members: async (guild, _, { models }) => {
      return await models.Character.findAll({
        where: {
          '$characterProfile.guild_id$': guild.id,
        },
        include: [{
          model: models.CharacterProfile,
          as: 'characterProfile',
        }],
      });
    },
  },
};

export default resolvers;
