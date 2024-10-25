import { ConfigModule } from '@app/config/config.module';
import { EventsModule } from '@app/events/events.module';
import { GraphQLModule } from '@app/modules/graphql.module';
import { PrismaModule } from '@app/modules/prisma.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [ConfigModule, EventsModule, GraphQLModule, PrismaModule],
})
export class AppModule {}
