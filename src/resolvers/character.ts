import { CharacterAttributes } from '../models/character';
import { CharacterPromotionAttributes } from '../models/characterPromotion';
import { Resolvers, Loaders } from '../types';
import { getEquipment } from './equipment';

async function getCharacter(charModel: CharacterAttributes, loaders: Loaders) {
  const charData = charModel.get({ plain: true }) as CharacterAttributes;
  const charProfile = await loaders.characterProfile.load(charData.id);

  return {
    ...charData,
    ...(charProfile?.get({ plain: true }) || []),
  };
}

const resolvers: Resolvers = {
  Query: {
    character: async (_, { id }: { id: string }, { models, loaders }) => {
      const charModel = await models.Character.findByPk(id);
      return await getCharacter(charModel, loaders);
    },
    characters: async (_1, _2, { models, loaders }) => {
      const charModels = await models.Character.findAll();
      const res = charModels.map((charModel: CharacterAttributes) => getCharacter(charModel, loaders));
      return await Promise.all(res);
    },
  },

  Character: {
    guild: async (character, _, { loaders }) => {
      if (character.guildId) {
        return await loaders.guild.load(character.guildId);
      }
      return null;
    },

    promotions: async (character, _, { loaders }) => {
      const charPromotions = await loaders.characterPromotion.load(character.id) as CharacterPromotionAttributes[];
      let promotions = null;
      if (charPromotions && charPromotions.length > 0) {
        promotions = charPromotions.map(async (promotion) => {
          const equipments = promotion.equipments.map(async (equipmentId) => {
            const equipment = await loaders.equipment.load(equipmentId);
            if (equipment) {
              return await getEquipment(equipment, loaders);
            }
            return null;
          });

          return {
            level: promotion.promotionLevel,
            equipments: (await Promise.all(equipments)).filter(Boolean),
          };
        });
      }

      if (promotions) {
        return await Promise.all(promotions);
      }
      return null;
    },
  },
};

export default resolvers;
