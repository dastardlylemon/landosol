import { Models } from '../types';
import { GuildAttributes } from '../models/guild';
import { CharacterProfileAttributes } from '../models/characterProfile';

const batchGuilds = async (keys: [string], models: Models) => {
  const guilds = await models.Guild.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => guilds.find((guild: GuildAttributes) => guild.id === parseInt(key, 10)));
};

const batchCharacterProfiles = async (keys: [string], models: Models) => {
  const characterProfiles = await models.CharacterProfile.findAll({
    where: {
      id: keys,
    },
  });
  return keys.map((key) => characterProfiles.find((characterProfile: CharacterProfileAttributes) => characterProfile.id === parseInt(key, 10)));
};

export default { batchCharacterProfiles, batchGuilds };
