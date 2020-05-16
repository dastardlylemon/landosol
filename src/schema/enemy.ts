import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    enemy(id: ID!): Enemy
    enemies: [Enemy!]
  }

  type Enemy {
    id: ID!
    name: String!
    moveSpeed: Int
    seType: Int
    searchAreaWidth: Int
    attackType: Int
    normalAttackCastTime: Float
    visualChangeFlag: Int
    comment: String
    picture: String
  }
`;

