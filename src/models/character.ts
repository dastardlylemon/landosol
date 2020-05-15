const character = (sequelize, DataTypes) => {
  const Character = sequelize.define('character', {
    id: {
      type: DataTypes.INTEGER,
      field: 'unit_id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'unit_name',
    },
    guildId: {
      type: DataTypes.STRING,
      field: 'guild_id',
    },
  }, {
    tableName: 'unit_profile',
  });

  Character.associate = (models) => {
    Character.belongsTo(models.Guild);
  };

  return Character;
};

export default character;
