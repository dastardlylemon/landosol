import Sequelize from 'sequelize';

async function getEnemy(enemyModel) {
  const enemyData = enemyModel.get({ plain: true });
  // const charProfile = await charModel.getCharacterProfile();
  return {
    ...enemyData,
    // ...(charProfile?.get({ plain: true }) || []),
  };
}

export default {
  Query: {
    enemy: async (_, { id }: { id: string }, { models }) => {
      const enemyModel = await models.Enemy.findByPk(id);
      return await getEnemy(enemyModel);
    },
    enemies: async (_1, _2, { models }) => {
      const enemyModels = await models.Enemy.findAll();
      const res = enemyModels.map(getEnemy);
      return await Promise.all(res);
    },
  },

//   Character: {
//     guild: async (character, _, { models }) => {
//       return await models.Guild.findByPk(character.guildId);
//     },
//   },
};

