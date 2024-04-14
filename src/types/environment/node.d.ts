declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    HOST: string;
    PORT: string;
    INTROSPECTION: string;
    PLAYGROUND: string;
    MISSION_GRAPHQL_API_URL: string;
  }
}
