import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    character(id: ID!): Character
    characters: [Character!]
  }

  type Character implements Unit {
    id: ID!
    name: String!
    motionType: Int
    moveSpeed: Int
    seType: Int
    searchAreaWidth: Int
    attackType: Int
    normalAttackCastTime: Float
    comment: String
    picture: String

    kanaName: String
    age: String
    guild: Guild
    race: String
    height: String
    weight: String
    bloodType: String
    isLimited: Int
    favorite: String
    voice: String
    catchCopy: String

    promotions: [Promotion!]
  }

  type Promotion {
    level: Int
    equipments: [Equipment!]
  }
`;

