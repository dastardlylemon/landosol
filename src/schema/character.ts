import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    character(id: ID!): Character
    characters: [Character!]
  }

  type Character {
    id: ID!
    name: String!
    age: String
    guild: Guild
    race: String
    height: String
    weight: String
    bloodType: String
    interest: String
    voice: String
    catchCopy: String
  }
`;

