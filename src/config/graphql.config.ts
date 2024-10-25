import { ConfigType, registerAs } from '@nestjs/config';

export const GraphQLConfigToken = 'GRAPHQL_CONFIG';

export const graphQLConfig = registerAs(GraphQLConfigToken, () => ({
    playground: process.env.GRAPHQL_PLAYGROUND === 'true',
}));

export const GraphQLConfigKey = graphQLConfig.KEY;
export type GraphQLConfig = ConfigType<typeof graphQLConfig>;
