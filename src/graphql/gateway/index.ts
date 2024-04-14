import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from '@apollo/gateway';
import { GraphQLDataSourceRequestKind } from '@apollo/gateway/dist/datasources/types';
import { type ApolloServerOptionsWithGateway } from '@apollo/server';

import env from '@project/env';
import logger from '@project/utils/logging';

import { type Apollo } from '../../types/apollo';

const { MISSION_GRAPHQL_API_URL } = env();

export default new ApolloGateway({
  logger,
  serviceHealthCheck: true,
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [{ name: 'mission', url: MISSION_GRAPHQL_API_URL }],
  }),
  buildService: ({ url }) =>
    new RemoteGraphQLDataSource<Apollo.Context>({
      url,
      willSendRequest: ({ kind, request: { http }, context }) => {
        if (kind === GraphQLDataSourceRequestKind.INCOMING_OPERATION) {
          const { request, authorization } = context;

          http?.headers.set('request-id', request.id);
          http?.headers.set('authorization', authorization ?? '');
        }
      },
    }),
}) satisfies ApolloServerOptionsWithGateway<Apollo.Context>['gateway'];
