import { nestConfig } from '@app/config/nest.config';
import { prismaConfig } from '@app/config/prisma.config';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { graphqlConfig } from '@app/config/graphql.config';

@Module({
    imports: [
        BaseConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [nestConfig, prismaConfig, graphqlConfig],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('development', 'test', 'production').default('production'),
                HOST: Joi.string().default('0.0.0.0'),
                PORT: Joi.number().default(3000),
                DATABASE_URL: Joi.string().required(),
                DATABASE_VERBOSE: Joi.boolean().default(false),
                GRAPHQL_PLAYGROUND: Joi.boolean().default(false),
            }),
        }),
    ],
})
export class ConfigModule { }
