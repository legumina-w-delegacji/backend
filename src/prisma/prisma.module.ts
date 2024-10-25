import { PrismaOptionsToken } from '@app/prisma/prisma.consts';
import { PrismaAsyncOptions, PrismaOptions } from '@app/prisma/prisma.options';
import { PrismaService } from '@app/prisma/prisma.service';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class PrismaModule {
    static forRoot(options: PrismaOptions): DynamicModule {
        return {
            global: options.isGlobal,
            module: PrismaModule,
            providers: [{ provide: PrismaOptionsToken, useValue: options }, PrismaService],
            exports: [PrismaService],
        };
    }

    static forRootAsync(options: PrismaAsyncOptions): DynamicModule {
        return {
            global: options.isGlobal,
            module: PrismaModule,
            providers: [
                {
                    provide: PrismaOptionsToken,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                PrismaService,
            ],
            imports: options.imports,
            exports: [PrismaService],
        };
    }
}
