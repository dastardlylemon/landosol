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
};

export type QuestModel = typeof Model & {
  new(): QuestAttributes;
};

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
  }, {
    tableName: 'quest_data',
  });

  return Quest;
};

export default quest;
