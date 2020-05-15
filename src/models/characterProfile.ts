const characterProfile = (sequelize, DataTypes) => {
  const CharacterProfile = sequelize.define('characterProfile', {
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
