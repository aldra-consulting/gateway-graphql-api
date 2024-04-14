import { env } from 'process';

import { type Environment } from '@project/types';
import { validate } from '@project/utils/environment';

const {
  NODE_ENV: ENVIRONMENT,
  HOST = '0.0.0.0',
  PORT = 8007,
  INTROSPECTION = true,
  PLAYGROUND = true,
  MISSION_GRAPHQL_API_URL = '',
} = env;

export default () =>
  validate<Environment>(
    {
      ENVIRONMENT,
      HOST,
      PORT: Number(PORT),
      INTROSPECTION: Boolean(INTROSPECTION),
      PLAYGROUND: Boolean(PLAYGROUND),
      MISSION_GRAPHQL_API_URL,
    },
    [
      'ENVIRONMENT',
      'HOST',
      'PORT',
      'INTROSPECTION',
      'PLAYGROUND',
      'MISSION_GRAPHQL_API_URL',
    ]
  );
