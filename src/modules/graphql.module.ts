import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule as NestGraphQLModule } from "@nestjs/graphql";
import { NestConfig, NestConfigKey } from '@app/config/nest.config';
import { ApolloServerPlugin } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as path from 'node:path';

@Module({
    imports: [
        NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            inject: [NestConfigKey],
            useFactory: (nestConfig: NestConfig) => {
                const plugins: ApolloServerPlugin[] = [];

                if (nestConfig.nodeEnv === 'development') {
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