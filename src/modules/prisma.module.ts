import { PrismaConfig, PrismaConfigKey } from '@app/config/prisma.config';
import { PrismaModule as BasePrismaModule } from '@app/prisma/prisma.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        BasePrismaModule.forRootAsync({
            isGlobal: true,
            inject: [PrismaConfigKey],
            useFactory: (prismaConfig: PrismaConfig) => prismaConfig,
        }),
    ],
})
export class PrismaModule {}
