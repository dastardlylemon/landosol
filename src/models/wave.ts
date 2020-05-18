import { Sequelize, Model } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';

export interface WaveAttributes extends Model {
  id: number;
  enemyId1: number;
  enemyId2: number;
  enemyId3: number;
  enemyId4: number;
  enemyId5: number;
  enemies: number[];
};

export type WaveModel = AssociatedModel & {
  new(): WaveAttributes;
};

const MAX_ENEMIES = 5;

const wave = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const Wave = <WaveModel>sequelize.define('wave', {
    id: {
      type: DataTypes.INTEGER,
      field: 'wave_group_id',
      primaryKey: true,
    },
    enemyId1: {
      type: DataTypes.INTEGER,
      field: 'enemy_id_1',
    },
    enemyId2: {
      type: DataTypes.INTEGER,
      field: 'enemy_id_2',
    },
    enemyId3: {
      type: DataTypes.INTEGER,
      field: 'enemy_id_3',
    },
    enemyId4: {
      type: DataTypes.INTEGER,
      field: 'enemy_id_4',
    },
    enemyId5: {
      type: DataTypes.INTEGER,
      field: 'enemy_id_5',
    },
    enemies: {
      type: DataTypes.VIRTUAL,
      get(this: any) {
        const enemyIds = [];
        for (let i: number = 0; i < MAX_ENEMIES; i++) {
          const enemyId = this.getDataValue(`enemyId${i + 1}`);
          if (enemyId) {
            enemyIds.push(enemyId);
          }
        }
        return enemyIds;
      },
    },
  }, {
    tableName: 'wave_group_data',
  });

  return Wave;
};

export default wave;
