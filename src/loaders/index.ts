import { Models } from '../types';
import { CharacterProfileAttributes } from '../models/characterProfile';
import { CharacterPromotionAttributes } from '../models/characterPromotion';
import { EnemyAttributes } from '../models/enemy';
import { EnemyInstanceAttributes } from '../models/enemyInstance';
import { EquipmentAttributes } from '../models/equipment';
import { EquipmentRecipeAttributes } from '../models/equipmentRecipe';
import { GuildAttributes } from '../models/guild';
import { WaveAttributes } from '../models/wave';

const batchGuilds = async (keys: readonly unknown[], models: Models) => {
  const guilds = await models.Guild.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => guilds.find((guild: GuildAttributes) => guild.id === parseInt(key as string, 10)));
};

const batchCharacterProfiles = async (keys: readonly unknown[], models: Models) => {
  const characterProfiles = await models.CharacterProfile.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => characterProfiles.find((characterProfile: CharacterProfileAttributes) => characterProfile.id === parseInt(key as string, 10)));
};

const batchCharacterPromotions = async (keys: readonly unknown[], models: Models) => {
  const characterPromotions = await models.CharacterPromotion.findAll({
    where: {
      unitId: keys,
    },
  });
  return keys.map((key) => characterPromotions.filter((characterPromotion: CharacterPromotionAttributes) => characterPromotion.unitId === parseInt(key as string, 10)));
};

const batchEnemies = async (keys: readonly unknown[], models: Models) => {
  const enemies = await models.Enemy.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => enemies.find((enemy: EnemyAttributes) => enemy.id === parseInt(key as string, 10)));
};

const batchEnemyInstances = async (keys: readonly unknown[], models: Models) => {
  const enemyInstances = await models.EnemyInstance.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => enemyInstances.find((enemyInstance: EnemyInstanceAttributes) => enemyInstance.id === parseInt(key as string, 10)));
};

const batchEquipments = async (keys: readonly unknown[], models: Models) => {
  const equipments = await models.Equipment.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => equipments.find((equipment: EquipmentAttributes) => equipment.id === parseInt(key as string, 10)));
};

const batchEquipmentRecipes = async (keys: readonly unknown[], models: Models) => {
  const equipmentRecipes = await models.EquipmentRecipe.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => equipmentRecipes.find((equipmentRecipe: EquipmentRecipeAttributes) => equipmentRecipe.id === parseInt(key as string, 10)));
};

const batchWaves = async (keys: readonly unknown[], models: Models) => {
  const waves = await models.Wave.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => waves.find((wave: WaveAttributes) => wave.id === parseInt(key as string, 10)));
};

export default {
  batchCharacterProfiles,
  batchCharacterPromotions,
  batchEnemies,
  batchEnemyInstances,
  batchEquipments,
  batchEquipmentRecipes,
  batchGuilds,
  batchWaves,
};
