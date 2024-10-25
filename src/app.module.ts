import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';
import { GraphQLModule } from '@app/modules/graphql.module';
import { AppResolver } from '@app/app.resolver';
import { PrismaModule } from '@app/prisma/prisma.module';

@Module({
    imports: [
        ConfigModule,
        GraphQLModule,
        PrismaModule
    ],
    providers: [
        AppResolver
    ]
})
export class AppModule { }
