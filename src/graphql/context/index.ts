import { type ApolloContextFunction } from './types';
import { createRequest } from './utils';

export default (async ({ req: { headers } }) =>
  Promise.resolve({
    request: createRequest(),
    authorization: headers.authorization,
  })) satisfies ApolloContextFunction;
