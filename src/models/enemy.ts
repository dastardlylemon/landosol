import { Sequelize, Model } from 'sequelize';
import { SequelizeDataTypes } from '../types';

export interface EnemyAttributes extends Model {
  id: number;
  name: string;
  seType: number;
  motionType: number;
  moveSpeed: number;
  searchAreaWidth: number;
  attackType: number;
  normalAttackCastTime: number;
  visualChangeFlag: number;
  comment: string;
  prefabId: number;
  picture: string;
};

export type EnemyModel = typeof Model & {
  new(): EnemyAttributes;
};

const enemy = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const Enemy = <EnemyModel>sequelize.define('enemy', {
    id: {
      type: DataTypes.INTEGER,
      field: 'unit_id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'unit_name',
    },
    seType: {
      type: DataTypes.INTEGER,
      field: 'se_type',
    },
    motionType: {
      type: DataTypes.INTEGER,
      field: 'motion_type',
    },
    moveSpeed: {
      type: DataTypes.INTEGER,
      field: 'move_speed',
    },
    searchAreaWidth: {
      type: DataTypes.INTEGER,
      field: 'search_area_width',
    },
    attackType: {
      type: DataTypes.INTEGER,
      field: 'atk_type',
    },
    normalAttackCastTime: {
      type: DataTypes.REAL,
      field: 'normal_atk_cast_time',
    },
    visualChangeFlag: {
      type: DataTypes.INTEGER,
      field: 'visual_change_flag',
    },
    comment: DataTypes.STRING,
    prefabId: {
      type: DataTypes.INTEGER,
      field: 'prefab_id',
    },
    picture: {
      type: DataTypes.VIRTUAL,
      get(this: any): string {
        const isShadow = this.getDataValue('visualChangeFlag') === 1;
        const path = isShadow ? 'unit_shadow' : 'unit';
        const offset = isShadow ? 10 : 0;
        return `https://redive.estertion.win/icon/${path}/${this.getDataValue('prefabId') + offset}.webp`;
      },
    },
  }, {
    tableName: 'unit_enemy_data',
  });

  return Enemy;
};

export default enemy;
