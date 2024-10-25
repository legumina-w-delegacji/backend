import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';

@Module({
    imports: [
        ConfigModule,
    ],
})
export class AppModule { }
