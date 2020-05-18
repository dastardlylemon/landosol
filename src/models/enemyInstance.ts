import { Sequelize, Model, BelongsToGetAssociationMixin } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';
import { EnemyAttributes } from './enemy';

export interface EnemyInstanceAttributes extends Model {
  id: number;
  unitId: number;
  level: number;
  hp: number;
  attack: number;
  magicAttack: number;
  defense: number;
  magicDefense: number;
  critical: number;
  magicCritical: number;
  waveHpRecovery: number;
  waveEnergyRecovery: number;
  dodge: number;
  penetrate: number;
  magicPenetrate: number;
  lifeSteal: number;
  hpRecoveryRate: number;
  energyRecoveryRate: number;
  energyReduceRate: number;
  getEnemy: BelongsToGetAssociationMixin<EnemyAttributes>;
};

export type EnemyInstanceModel = AssociatedModel & {
  new(): EnemyInstanceAttributes;
};

const enemyInstance = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const EnemyInstance = <EnemyInstanceModel>sequelize.define('enemy', {
    id: {
      type: DataTypes.INTEGER,
      field: 'enemy_id',
      primaryKey: true,
    },
    unitId: {
      type: DataTypes.INTEGER,
      field: 'unit_id',
    },
    hp: DataTypes.INTEGER,
    attack: {
      type: DataTypes.INTEGER,
      field: 'atk',
    },
    magicAttack: {
      type: DataTypes.INTEGER,
      field: 'magic_str',
    },
    defense: {
      type: DataTypes.INTEGER,
      field: 'def',
    },
    magicDefense: {
      type: DataTypes.INTEGER,
      field: 'magic_def',
    },
    critical: {
      type: DataTypes.INTEGER,
      field: 'physical_critical',
    },
    magicCritical: {
      type: DataTypes.INTEGER,
      field: 'magic_critical',
    },
    waveHpRecovery: {
      type: DataTypes.INTEGER,
      field: 'wave_hp_recovery',
    },
    waveEnergyRecovery: {
      type: DataTypes.INTEGER,
      field: 'wave_energy_recovery',
    },
    dodge: DataTypes.INTEGER,
    penetrate: {
      type: DataTypes.INTEGER,
      field: 'physical_penetrate',
    },
    magicPenetrate: {
      type: DataTypes.INTEGER,
      field: 'magic_penetrate',
    },
    lifeSteal: {
      type: DataTypes.INTEGER,
      field: 'life_steal',
    },
    hpRecoveryRate: {
      type: DataTypes.INTEGER,
      field: 'hp_recovery_rate',
    },
    energyRecoveryRate: {
      type: DataTypes.INTEGER,
      field: 'energy_recovery_rate',
    },
    energyReduceRate: {
      type: DataTypes.INTEGER,
      field: 'energy_reduce_rate',
    },
  }, {
    tableName: 'enemy_parameter',
  });

  EnemyInstance.associate = (models) => {
    EnemyInstance.belongsTo(models.Enemy, { foreignKey: 'unit_id' });
  };

  return EnemyInstance;
};

export default enemyInstance;
