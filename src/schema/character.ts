import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    character(id: ID!): Character
    characters: [Character!]
  }

  type Character {
    id: ID!
    name: String!
    guild: Guild
  }
`;

