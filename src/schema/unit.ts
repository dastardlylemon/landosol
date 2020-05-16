import { gql } from 'apollo-server-express';

export default gql`
  interface Unit {
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
  }
`;

