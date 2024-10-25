import { OpenAIOptionsToken } from '@app/openai/openai.consts';
import { OpenAIAsyncOptions, OpenAIOptions } from '@app/openai/openai.options';
import { OpenAIService } from '@app/openai/openai.service';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class OpenAIModule {
    static forRoot(options: OpenAIOptions): DynamicModule {
        return {
            global: options.isGlobal,
            module: OpenAIModule,
            providers: [{ provide: OpenAIOptionsToken, useValue: options }, OpenAIService],
            exports: [OpenAIService],
        };
    }

    static forRootAsync(options: OpenAIAsyncOptions): DynamicModule {
        return {
            global: options.isGlobal,
            module: OpenAIModule,
            providers: [
                {
                    provide: OpenAIOptionsToken,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                OpenAIService,
            ],
            imports: options.imports,
            exports: [OpenAIService],
        };
    }
}
