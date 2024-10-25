import { OpenAIConfig, OpenAIConfigKey } from '@app/config/openai.config';
import { OpenAIModule as BaseOpenAIModule } from '@app/openai/openai.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        BaseOpenAIModule.forRootAsync({
            isGlobal: true,
            inject: [OpenAIConfigKey],
            useFactory: (openAIConfig: OpenAIConfig) => openAIConfig,
        }),
    ],
})
export class OpenAIModule {}
