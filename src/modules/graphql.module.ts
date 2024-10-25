import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule as NestGraphQLModule } from "@nestjs/graphql";
import { NestConfig, NestConfigKey } from '@app/config/nest.config';
import { ApolloServerPlugin } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as path from 'node:path';
import { GraphQLConfig, GraphQLConfigKey } from "@app/config/graphql.config";

@Module({
    imports: [
        NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            inject: [NestConfigKey, GraphQLConfigKey],
            useFactory: (nestConfig: NestConfig, graphqlConfig: GraphQLConfig) => {
                const plugins: ApolloServerPlugin[] = [];

                if (graphqlConfig.playground) {
                    plugins.push(ApolloServerPluginLandingPageLocalDefault());
                }

                return {
                    debug: nestConfig.nodeEnv === 'development',
                    includeStacktraceInErrorResponses: nestConfig.nodeEnv === 'development',
                    csrfPrevention: nestConfig.nodeEnv === 'production',
                    playground: false,
                    sortSchema: true,
                    plugins,
                    autoSchemaFile: {
                        federation: 2,
                        path: path.join(process.cwd(), 'schema.graphql'),
                    },
                }
            },
        })
    ]
})
export class GraphQLModule {

}