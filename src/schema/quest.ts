import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    quest(id: ID!): Quest
    quests: [Quest!]
  }

  type Quest {
    id: ID!
    name: String
    stamina: Int
    teamExperience: Int
    unitExperience: Int
    love: Int
    dailyLimit: Int
    waves: [Wave!]
  }

  type Wave {
    id: ID!
    enemies: [Enemy!]
  }
`;

