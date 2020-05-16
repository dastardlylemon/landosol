async function getEquipment(equipmentModel) {
  const equipmentData  = equipmentModel.get({ plain: true });
  // const charProfile = await equipmentModel.getEquipmentProfile();
  return {
    ...equipmentData,
    // ...(charProfile?.get({ plain: true }) || []),
  };
}

export default {
  Query: {
    equipment: async (_, { id }: { id: string }, { models }) => {
      const equipmentModel = await models.Equipment.findByPk(id);
      return await getEquipment(equipmentModel);
    },
    equipments: async (_1, _2, { models }) => {
      const equipmentModels = await models.Equipment.findAll();
      const res = equipmentModels.map(getEquipment);
      return await Promise.all(res);
    },
  },

  // Equipment: {
  //   guild: async (equipment, _, { models }) => {
  //     return await models.Guild.findByPk(equipment.guildId);
  //   },
  // },
};

