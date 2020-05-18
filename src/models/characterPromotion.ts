import { Sequelize, Model } from 'sequelize';
import { AssociatedModel, SequelizeDataTypes } from '../types';

export interface CharacterPromotionAttributes extends Model {
  unitId: number;
  promotionLevel: number;
  equipmentId1: number;
  equipmentId2: number;
  equipmentId3: number;
  equipmentId4: number;
  equipmentId5: number;
  equipmentId6: number;
  equipments: number[];
};

export type CharacterPromotionModel = AssociatedModel & {
  new(): CharacterPromotionAttributes;
};

const MAX_EQUIPMENTS = 6;

const characterPromotion = (sequelize: Sequelize, DataTypes: SequelizeDataTypes) => {
  const CharacterPromotion = <CharacterPromotionModel>sequelize.define('characterPromotion', {
    unitId: {
      type: DataTypes.INTEGER,
      field: 'unit_id',
      primaryKey: true,
    },
    promotionLevel: {
      type: DataTypes.INTEGER,
      field: 'promotion_level',
      primaryKey: true,
    },
    equipmentId1: {
      type: DataTypes.INTEGER,
      field: 'equip_slot_1',
    },
    equipmentId2: {
      type: DataTypes.INTEGER,
      field: 'equip_slot_2',
    },
    equipmentId3: {
      type: DataTypes.INTEGER,
      field: 'equip_slot_3',
    },
    equipmentId4: {
      type: DataTypes.INTEGER,
      field: 'equip_slot_4',
    },
    equipmentId5: {
      type: DataTypes.INTEGER,
      field: 'equip_slot_5',
    },
    equipmentId6: {
      type: DataTypes.INTEGER,
      field: 'equip_slot_6',
    },
    equipments: {
      type: DataTypes.VIRTUAL,
      get(this: any) {
        const equipIds = [];
        for (let i: number = 0; i < MAX_EQUIPMENTS; i++) {
          const equipmentId = this.getDataValue(`equipmentId${i + 1}`);
          if (equipmentId) {
            equipIds.push(equipmentId);
          }
        }
        return equipIds;
      },
    },
  }, {
    tableName: 'unit_promotion',
  });

  return CharacterPromotion;
};

export default characterPromotion;
