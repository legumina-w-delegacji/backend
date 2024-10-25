import { nestConfig } from '@app/config/nest.config';
import { ConfigModule as BaseConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';

@Module({
    imports: [
        BaseConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [nestConfig],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('development', 'test', 'production').default('production'),
                HOST: Joi.string().default('0.0.0.0'),
                PORT: Joi.number().default(3000),
            }),
        }),
    ],
})
export class ConfigModule { }
