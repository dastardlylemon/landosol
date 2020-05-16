import { EnemyAttributes } from '../models/enemy';
import { Resolvers } from '../types';

async function getEnemy(enemyModel: EnemyAttributes) {
  const enemyData = enemyModel.get({ plain: true });
  return {
    ...enemyData,
  };
}

const resolvers: Resolvers = {
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
};

export default resolvers;
