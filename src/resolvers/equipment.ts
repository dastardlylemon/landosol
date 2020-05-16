import { EquipmentAttributes } from '../models/equipment';
import { EquipmentRecipeAttributes } from '../models/equipmentRecipe';
import { Models, Resolvers } from '../types';

async function getEquipment(equipmentModel: EquipmentAttributes, models: Models): Promise<any> {
  const equipmentData  = equipmentModel.get({ plain: true });
  const recipe = await equipmentModel.getEquipmentRecipe();
  let ingredients = null;
  if (recipe) {
    const recipeModel = recipe.get({ plain: true }) as EquipmentRecipeAttributes;
    ingredients = recipeModel
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

const resolvers: Resolvers = {
  Query: {
    equipment: async (_, { id }: { id: string }, { models }) => {
      const equipmentModel = await models.Equipment.findByPk(id);
      const eq = await getEquipment(equipmentModel, models);
      return await getEquipment(equipmentModel, models);
    },
    equipments: async (_1, _2, { models }) => {
      const equipmentModels = await models.Equipment.findAll();
      const res = equipmentModels.map((equipment: EquipmentAttributes) => getEquipment(equipment, models));
      return await Promise.all(res);
    },
  },
};

export default resolvers;
