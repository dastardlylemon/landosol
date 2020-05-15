import Sequelize from 'sequelize';

export const characterOptions = (models) => ({
  attributes: [
    'id',
    'name',
    'kanaName',
    'isLimited',
    'rarity',
    'characterProfile.age',
    'characterProfile.race',
    'characterProfile.height',
    'characterProfile.weight',
    'characterProfile.favorite',
    'characterProfile.voice',
    [Sequelize.col('characterProfile.guild_id'), 'guildId'],
  ],
  include: [{
    model: models.CharacterProfile,
    attributes: [],
  }],
  raw: true,
});

export default {
  Query: {
    character: async (_, { id }: { id: string }, { models }) => {
      return await models.Character.findByPk(id, characterOptions(models));
    },
    characters: async (_1, _2, { models }) => {
      return await models.Character.findAll(characterOptions(models));
    },
  },

  Character: {
    guild: async (character, _, { models }) => {
      return await models.Guild.findByPk(character.guildId);
    },
  },
};

