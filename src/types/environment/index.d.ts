export interface Environment {
  ENVIRONMENT: 'development' | 'production';
  HOST: string;
  PORT: number;
  INTROSPECTION: boolean;
  PLAYGROUND: boolean;
  MISSION_GRAPHQL_API_URL: string;
}
