import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    equipment(id: ID!): Equipment
    equipments: [Equipment!]
  }

  type Equipment {
    id: ID!
    name: String!
    description: String
    promotionLevel: Int
    isCrafted: Int
    equipmentEnhancePoint: Int
    salePrice: Int
    requireLevel: Int
    hp: Float
    attack: Float
    magicAttack: Float
    defense: Float
    magicDefense: Float
    critical: Float
    magicCritical: Float
    waveHpRecovery: Float
    waveEnergyRecovery: Float
    dodge: Float
    penetrate: Float
    magicPenetrate: Float
    lifeSteal: Float
    hpRecoveryRate: Float
    energyRecoveryRate: Float
    energyReduceRate: Float
    enableDonation: Int
    accuracy: Float
    picture: String
  }
`;

