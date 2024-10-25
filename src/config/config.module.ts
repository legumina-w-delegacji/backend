import { graphQLConfig } from '@app/config/graphql.config';
import { nestConfig } from '@app/config/nest.config';
import { prismaConfig } from '@app/config/prisma.config';
import { Module } from '@nestjs/common';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { openAIConfig } from './openai.config';

@Module({
    imports: [
        BaseConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [nestConfig, prismaConfig, graphQLConfig, openAIConfig],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('development', 'test', 'production').default('production'),
                HOST: Joi.string().default('0.0.0.0'),
                PORT: Joi.number().default(3000),
                DATABASE_URL: Joi.string().required(),
                DATABASE_VERBOSE: Joi.boolean().default(false),
                GRAPHQL_PLAYGROUND: Joi.boolean().default(false),
                OPENAI_API_KEY: Joi.string().required(),
                OPENAI_API_URL: Joi.string().required(),
                OPENAI_MODEL: Joi.string().required(),
            }),
        }),
    ],
})
export class ConfigModule {}
