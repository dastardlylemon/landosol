import { Resolvers } from '../types';
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
      console.log(quest.waves);
      const waveModels = await models.Wave.findAll({
        where: {
          id: quest.waves,
        },
      }) as WaveAttributes[];
      const waveData = waveModels.map(async (wave) => {
        const enemies = await models.Enemy.findAll({
          where: {
            id: wave.enemies,
          },
        });

        console.log(wave.enemies);
        return {
          id: wave.id,
          enemies,
        };
      });
      return await Promise.all(waveData);
    },
  },
};

export default resolvers;
