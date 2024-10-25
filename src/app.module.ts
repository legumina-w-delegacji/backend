import { ConfigModule } from '@app/config/config.module';
import { EventsModule } from '@app/events/events.module';
import { GraphQLModule } from '@app/modules/graphql.module';
import { OpenAIModule } from '@app/modules/openai.module';
import { PrismaModule } from '@app/modules/prisma.module';
import { FirebaseModule } from '@app/firebase/firebase.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [ConfigModule, EventsModule, FirebaseModule, GraphQLModule, OpenAIModule, PrismaModule],
})
export class AppModule { }
