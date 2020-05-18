import { Sequelize } from 'sequelize';
import { Models } from '../types';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/../db/redive_jp.db`,
  define: {
    timestamps: false,
  },
});

const models: Models = {
  Character: sequelize.import('./character'),
  CharacterProfile: sequelize.import('./characterProfile'),
  CharacterPromotion: sequelize.import('./characterPromotion'),
  Enemy: sequelize.import('./enemy'),
  Equipment: sequelize.import('./equipment'),
  EquipmentRecipe: sequelize.import('./equipmentRecipe'),
  Guild: sequelize.import('./guild'),
  Quest: sequelize.import('./quest'),
  Wave: sequelize.import('./wave'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
