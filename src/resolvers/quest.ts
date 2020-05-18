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
    waves: async (quest, _, { loaders }) => {
      const waveModels = await loaders.wave.loadMany(quest.waves);
      const waveData = waveModels.map(async (wave) => {
        const enemyInstances = await loaders.enemyInstance.loadMany(wave.enemies);
        const enemies = enemyInstances.map(async (enemyInstance) => {
          const enemyModel = await loaders.enemy.load(enemyInstance.unitId);
          return enemyModel.get({ plain: true });
        });

        return {
          id: wave.id,
          enemies: await Promise.all(enemies),
        };
      });
      return await Promise.all(waveData);
    },
  },
};

export default resolvers;
