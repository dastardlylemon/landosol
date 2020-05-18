import { Sequelize, Model } from 'sequelize';
import { SequelizeDataTypes } from '../types';

export interface QuestAttributes extends Model {
  id: number;
  name: string;
  stamina: number;
  teamExperience: number;
  unitExperience: number;
  love: number;
  dailyLimit: number;
  waveId1: number;
  waveId2: number;
  waveId3: number;
};

export type QuestModel = typeof Model & {
  new(): QuestAttributes;
};

const MAX_WAVES = 3;

const quest = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const Quest = <QuestModel>sequelize.define('quest', {
    id: {
      type: DataTypes.INTEGER,
      field: 'quest_id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'quest_name',
    },
    stamina: DataTypes.INTEGER,
    teamExperience: {
      type: DataTypes.INTEGER,
      field: 'team_exp',
    },
    unitExperience: {
      type: DataTypes.INTEGER,
      field: 'unit_exp',
    },
    love: DataTypes.INTEGER,
    dailyLimit: {
      type: DataTypes.INTEGER,
      field: 'daily_limit',
    },
    waveId1: {
      type: DataTypes.INTEGER,
      field: 'wave_group_id_1',
    },
    waveId2: {
      type: DataTypes.INTEGER,
      field: 'wave_group_id_2',
    },
    waveId3: {
      type: DataTypes.INTEGER,
      field: 'wave_group_id_3',
    },
    waves: {
      type: DataTypes.VIRTUAL,
      get(this: any) {
        const waveIds = [];
        for (let i: number = 0; i < MAX_WAVES; i++) {
          const waveId = this.getDataValue(`waveId${i + 1}`);
          if (waveId) {
            waveIds.push(waveId);
          }
        }
        return waveIds;
      },
    },
  }, {
    tableName: 'quest_data',
  });

  return Quest;
};

export default quest;
