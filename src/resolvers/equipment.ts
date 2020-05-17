import { EquipmentAttributes } from '../models/equipment';
import { EquipmentRecipeAttributes } from '../models/equipmentRecipe';
import { Loaders, Resolvers } from '../types';

async function getEquipment(equipmentModel: EquipmentAttributes, loaders: Loaders): Promise<any> {
  const equipmentData  = equipmentModel.get({ plain: true }) as EquipmentAttributes;
  const recipe = await loaders.equipmentRecipe.load(equipmentData.id);
  let ingredients = null;
  if (recipe) {
    const recipeModel = recipe.get({ plain: true }) as EquipmentRecipeAttributes;
    ingredients = recipeModel
      .equipments
      .map(async ({ amount, equipmentId }) => {
        const equipment = await loaders.equipment.load(equipmentId);
        return {
          amount,
          equipment: await getEquipment(equipment, loaders),
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
    equipment: async (_, { id }: { id: string }, { loaders }) => {
      const equipmentModel = await loaders.equipment.load(id);
      return await getEquipment(equipmentModel, loaders);
    },
    equipments: async (_1, _2, { models, loaders }) => {
      const equipmentModels = await models.Equipment.findAll();
      const res = equipmentModels.map((equipment: EquipmentAttributes) => getEquipment(equipment, loaders));
      return await Promise.all(res);
    },
  },
};

export default resolvers;
