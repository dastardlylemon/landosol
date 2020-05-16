import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/../db/redive_jp.db`,
  define: {
    timestamps: false,
  },
});

console.log(__dirname);

const models = {
  Character: sequelize.import('./character'),
  CharacterProfile: sequelize.import('./characterProfile'),
  Enemy: sequelize.import('./enemy'),
  Equipment: sequelize.import('./equipment'),
  EquipmentRecipe: sequelize.import('./equipmentRecipe'),
  Guild: sequelize.import('./guild'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
