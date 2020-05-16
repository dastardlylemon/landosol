import { gql } from 'apollo-server-express';
import characterSchema from './character';
import enemySchema from './enemy';
import guildSchema from './guild';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [
  linkSchema,
  characterSchema,
  enemySchema,
  guildSchema,
];

