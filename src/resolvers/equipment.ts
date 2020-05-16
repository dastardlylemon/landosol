async function getEquipment(equipmentModel, models) {
  const equipmentData  = equipmentModel.get({ plain: true });
  const recipe = await equipmentModel.getEquipmentRecipe();
  let ingredients = null;
  if (recipe) {
    ingredients = recipe
      .get({ plain: true })
      .equipments
      .map(async ({ amount, equipmentId }) => {
        const equipment = await models.Equipment.findByPk(equipmentId);
        return {
          amount,
          equipment: await getEquipment(equipment, models),
        };
      });
  }

  return {
    ...equipmentData,
    recipe: recipe && ingredients
      ? {
        cost: recipe.cost,
        equipments: ingredients ? await Promise.all(ingredients) : null,
      } : null,
  };
}

export default {
  Query: {
    equipment: async (_, { id }: { id: string }, { models }) => {
      const equipmentModel = await models.Equipment.findByPk(id);
      const eq =await getEquipment(equipmentModel, models);
      console.log(eq.recipe.equipments);
      return await getEquipment(equipmentModel, models);
    },
    equipments: async (_1, _2, { models }) => {
      const equipmentModels = await models.Equipment.findAll();
      const res = equipmentModels.map((equipment) => getEquipment(equipment, models));
      return await Promise.all(res);
    },
  },
};

