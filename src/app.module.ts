import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';
import { GraphQLModule } from '@app/modules/graphql.module';
import { AppResolver } from '@app/app.resolver';

@Module({
    imports: [
        ConfigModule,
        GraphQLModule,
    ],
    providers: [
        AppResolver
    ]
})
export class AppModule { }
