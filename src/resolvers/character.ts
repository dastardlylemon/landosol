async function getCharacter(charModel) {
  const charData = charModel.get({ plain: true });
  const charProfile = await charModel.getCharacterProfile();
  return {
    ...charData,
    ...(charProfile?.get({ plain: true }) || []),
  };
}

export default {
  Query: {
    character: async (_, { id }: { id: string }, { models }) => {
      const charModel = await models.Character.findByPk(id);
      return await getCharacter(charModel);
    },
    characters: async (_1, _2, { models }) => {
      const charModels = await models.Character.findAll();
      const res = charModels.map(getCharacter);
      return await Promise.all(res);
    },
  },

  Character: {
    guild: async (character, _, { models }) => {
      return await models.Guild.findByPk(character.guildId);
    },
  },
};

