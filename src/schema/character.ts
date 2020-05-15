import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    character(id: ID!): Character
    characters: [Character!]
  }

  type Character {
    id: ID!
    name: String!
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
    picture: String
  }
`;

