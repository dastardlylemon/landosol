import { Sequelize, Model, HasOneGetAssociationMixin, HasManyGetAssociationsMixin } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';
import { CharacterProfileAttributes } from './characterProfile';
import { CharacterPromotionAttributes } from './characterPromotion';

export interface CharacterAttributes extends Model {
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
  kanaName: string;
  isLimited: number;
  rarity: number;
  getCharacterProfile: HasOneGetAssociationMixin<CharacterProfileAttributes>;
  getCharacterPromotions: HasManyGetAssociationsMixin<CharacterPromotionAttributes>
};

export type CharacterModel = AssociatedModel & {
  new(): CharacterAttributes;
};

const character = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const Character = <CharacterModel>sequelize.define('character', {
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
    comment: DataTypes.STRING,
    kanaName: {
      type: DataTypes.STRING,
      field: 'kana',
    },
    isLimited: {
      type: DataTypes.INTEGER,
      field: 'is_limited',
    },
    rarity: DataTypes.INTEGER,
    prefabId: {
      type: DataTypes.INTEGER,
      field: 'prefab_id',
    },
    picture: {
      type: DataTypes.VIRTUAL,
      get(this: any): string {
        return `https://redive.estertion.win/icon/unit/${this.getDataValue('prefabId') + 10}.webp`;
      },
    },
  }, {
    tableName: 'unit_data',
  });

  Character.associate = (models) => {
    Character.hasOne(models.CharacterProfile, { foreignKey: 'unit_id' });
    Character.hasMany(models.CharacterPromotion, { foreignKey: 'unit_id' });
  };

  return Character;
};

export default character;
