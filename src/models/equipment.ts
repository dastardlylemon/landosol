import { Sequelize, Model, HasOneGetAssociationMixin } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';
import { EquipmentRecipeAttributes } from './equipmentRecipe';

export interface EquipmentAttributes extends Model {
  id: number;
  name: string;
  description: string;
  promotionLevel: number;
  isCrafted: number;
  equipmentEnhancePoint: number;
  salePrice: number;
  requireLevel: number;
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
  enableDonation: number;
  accuracy: number;
  picture: number;
  getEquipmentRecipe: HasOneGetAssociationMixin<EquipmentRecipeAttributes>;
};

export type EquipmentModel = AssociatedModel & {
  new(): EquipmentAttributes;
};

const equipment = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const Equipment = <EquipmentModel>sequelize.define('equipment', {
    id: {
      type: DataTypes.INTEGER,
      field: 'equipment_id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'equipment_name',
    },
    description: DataTypes.STRING,
    promotionLevel: {
      type: DataTypes.INTEGER,
      field: 'promotion_level',
    },
    isCrafted: {
      type: DataTypes.INTEGER,
      field: 'craft_flg',
    },
    equipmentEnhancePoint: {
      type: DataTypes.INTEGER,
      field: 'equipment_enhance_point',
    },
    salePrice: {
      type: DataTypes.INTEGER,
      field: 'sale_price',
    },
    requireLevel: {
      type: DataTypes.INTEGER,
      field: 'require_level',
    },
    hp: DataTypes.REAL,
    attack: {
      type: DataTypes.REAL,
      field: 'atk',
    },
    magicAttack: {
      type: DataTypes.REAL,
      field: 'magic_str',
    },
    defense: {
      type: DataTypes.REAL,
      field: 'def',
    },
    magicDefense: {
      type: DataTypes.REAL,
      field: 'magic_def',
    },
    critical: {
      type: DataTypes.REAL,
      field: 'physical_critical',
    },
    magicCritical: {
      type: DataTypes.REAL,
      field: 'magic_critical',
    },
    waveHpRecovery: {
      type: DataTypes.REAL,
      field: 'wave_hp_recovery',
    },
    waveEnergyRecovery: {
      type: DataTypes.REAL,
      field: 'wave_energy_recovery',
    },
    dodge: DataTypes.REAL,
    penetrate: {
      type: DataTypes.REAL,
      field: 'physical_penetrate',
    },
    magicPenetrate: {
      type: DataTypes.REAL,
      field: 'magic_penetrate',
    },
    lifeSteal: {
      type: DataTypes.REAL,
      field: 'life_steal',
    },
    hpRecoveryRate: {
      type: DataTypes.REAL,
      field: 'hp_recovery_rate',
    },
    energyRecoveryRate: {
      type: DataTypes.REAL,
      field: 'energy_recovery_rate',
    },
    energyReduceRate: {
      type: DataTypes.REAL,
      field: 'energy_reduce_rate',
    },
    enableDonation: {
      type: DataTypes.INTEGER,
      field: 'enable_donation',
    },
    accuracy: DataTypes.REAL,
    picture: {
      type: DataTypes.VIRTUAL,
      get(this: any): string {
        return `https://redive.estertion.win/icon/equipment/${this.getDataValue('id')}.webp`;
      },
    },
  }, {
    tableName: 'equipment_data',
  });

  Equipment.associate = (models) => {
    Equipment.hasOne(models.EquipmentRecipe, { foreignKey: 'id' });
  };

  return Equipment;
};

export default equipment;
