import { ConfigType, registerAs } from '@nestjs/config';

export const GraphQLConfigToken = 'GRAPHQL_CONFIG';

export const graphqlConfig = registerAs(GraphQLConfigToken, () => ({
    playground: process.env.GRAPHQL_PLAYGROUND === 'true',
}));

export const GraphQLConfigKey = graphqlConfig.KEY;
export type GraphQLConfig = ConfigType<typeof graphqlConfig>;
