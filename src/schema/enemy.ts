import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    enemy(id: ID!): Enemy
    enemies: [Enemy!]
  }

  type Enemy implements Unit {
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

    visualChangeFlag: Int
  }
`;

