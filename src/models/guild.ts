import { Sequelize, Model } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';

export interface GuildAttributes extends Model {
  id: number;
  name: string;
  description: string;
};

export type GuildModel = AssociatedModel & {
  new(): GuildAttributes;
};

const guild = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const Guild = <GuildModel>sequelize.define('guild', {
    id: {
      type: DataTypes.INTEGER,
      field: 'guild_id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'guild_name',
    },
    description: DataTypes.STRING,
  }, {
    tableName: 'guild',
  });

  return Guild;
};

export default guild;
