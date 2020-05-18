import { Resolvers } from '../types';
import { EnemyInstanceAttributes } from '../models/enemyInstance';
import { WaveAttributes } from '../models/wave';

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
      const waveModels = await models.Wave.findAll({
        where: {
          id: quest.waves,
        },
      }) as WaveAttributes[];
      const waveData = waveModels.map(async (wave) => {
        const enemyInstances = await models.EnemyInstance.findAll({
          where: {
            id: wave.enemies,
          },
        }) as EnemyInstanceAttributes[];
        const enemies = enemyInstances.map(async (enemy) => {
          const enemyModel = await enemy.getEnemy();
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
