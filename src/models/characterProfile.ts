import { Sequelize, Model } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';

export interface CharacterProfileAttributes extends Model {
  id: number;
  race: string;
  height: string;
  weight: string;
  bloodType: string;
  favorite: string;
  voice: string;
  catchCopy: string;
  guildId: string;
};

export type CharacterProfileModel = AssociatedModel & {
  new(): CharacterProfileAttributes;
};

const characterProfile = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const CharacterProfile = <CharacterProfileModel>sequelize.define('characterProfile', {
    id: {
      type: DataTypes.INTEGER,
      field: 'unit_id',
      primaryKey: true,
    },
    race: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    bloodType: {
      type: DataTypes.STRING,
      field: 'blood_type',
    },
    favorite: {
      type: DataTypes.STRING,
      field: 'favorite',
    } ,
    voice: DataTypes.STRING,
    catchCopy: {
      type: DataTypes.STRING,
      field: 'catch_copy',
    },
    guildId: {
      type: DataTypes.STRING,
      field: 'guild_id',
    },
  }, {
    tableName: 'unit_profile',
  });

  CharacterProfile.associate = (models) => {
    CharacterProfile.belongsTo(models.Character, { foreignKey: 'unit_id' });
  };

  return CharacterProfile;
};

export default characterProfile;
