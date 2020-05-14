import { gql } from 'apollo-server-express';
import characterSchema from './character';
import guildSchema from './guild';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [linkSchema, characterSchema, guildSchema];

