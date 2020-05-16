const equipmentRecipe = (sequelize, DataTypes) => {
  const EquipmentRecipe = sequelize.define('equipmentRecipe', {
    id: {
      type: DataTypes.INTEGER,
      field: 'equipment_id',
      primaryKey: true,
    },
    cost: {
      type: DataTypes.INTEGER,
      field: 'crafted_cost',
    },
    equipmentId1: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_1',
    },
    consumeAmount1: {
      type: DataTypes.INTEGER,
      field: 'consume_num_1',
    },
    equipmentId2: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_2',
    },
    consumeAmount2: {
      type: DataTypes.INTEGER,
      field: 'consume_num_2',
    },
    equipmentId3: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_3',
    },
    consumeAmount3: {
      type: DataTypes.INTEGER,
      field: 'consume_num_3',
    },
    equipmentId4: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_4',
    },
    consumeAmount4: {
      type: DataTypes.INTEGER,
      field: 'consume_num_4',
    },
    equipmentId5: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_5',
    },
    consumeAmount5: {
      type: DataTypes.INTEGER,
      field: 'consume_num_5',
    },
    equipmentId6: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_6',
    },
    consumeAmount6: {
      type: DataTypes.INTEGER,
      field: 'consume_num_6',
    },
    equipmentId7: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_7',
    },
    consumeAmount7: {
      type: DataTypes.INTEGER,
      field: 'consume_num_7',
    },
    equipmentId8: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_8',
    },
    consumeAmount8: {
      type: DataTypes.INTEGER,
      field: 'consume_num_8',
    },
    equipmentId9: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_9',
    },
    consumeAmount9: {
      type: DataTypes.INTEGER,
      field: 'consume_num_9',
    },
    equipmentId10: {
      type: DataTypes.INTEGER,
      field: 'condition_equipment_id_10',
    },
    consumeAmount10: {
      type: DataTypes.INTEGER,
      field: 'consume_num_10',
    },
    equipments: {
      type: DataTypes.VIRTUAL,
      get() {
        const ingredients = [];
        for (let i: number = 0; i < 10; i++) {
          const equipmentId = this.getDataValue(`equipmentId${i + 1}`);
          const consumeAmount = this.getDataValue(`consumeAmount${i + 1}`);
          if (equipmentId && consumeAmount) {
            ingredients.push({
              amount: consumeAmount,
              equipmentId,
            });
          }
        }
        return ingredients;
      },
    },
  }, {
    tableName: 'equipment_craft',
  });

  EquipmentRecipe.associate = (models) => {
    EquipmentRecipe.belongsTo(models.Equipment, { foreignKey: 'id' });
  };

  return EquipmentRecipe;
};

export default equipmentRecipe;
