import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    guild(id: ID!): Guild
    guilds: [Guild!]
  }

  type Guild {
    id: ID!
    name: String
    description: String
    members: [Character!]
  }
`;

