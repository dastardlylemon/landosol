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
    kanaName: {
      type: DataTypes.STRING,
      field: 'kana',
    },
    isLimited: {
      type: DataTypes.INTEGER,
      field: 'is_limited',
    },
    rarity: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  }, {
    tableName: 'unit_data',
  });

  Character.associate = (models) => {
    Character.hasOne(models.CharacterProfile, { foreignKey: 'unit_id' });
  };

  return Character;
};

export default character;
