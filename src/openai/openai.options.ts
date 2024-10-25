import {
    DynamicModule,
    ForwardReference,
    InjectionToken,
    OptionalFactoryDependency,
    Provider,
    Type,
} from '@nestjs/common';

export interface OpenAIOptions {
    isGlobal: boolean;
    apiKey: string;
    apiUrl: string;
    model: string;
}

export interface OpenAIAsyncOptions {
    isGlobal?: boolean;
    imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
    useFactory?: (...args: any[]) => Promise<Omit<OpenAIOptions, 'isGlobal'>> | Omit<OpenAIOptions, 'isGlobal'>;
    inject?: Array<InjectionToken | OptionalFactoryDependency>;
    providers?: Provider[];
}
