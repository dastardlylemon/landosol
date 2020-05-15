const guild = (sequelize, DataTypes) => {
  const Guild = sequelize.define('guild', {
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
