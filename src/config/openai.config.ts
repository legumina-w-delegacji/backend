import { ConfigType, registerAs } from '@nestjs/config';

export const OpenAIConfigToken = 'OPENAI_CONFIG';

export const openAIConfig = registerAs(OpenAIConfigToken, () => ({
    apiKey: process.env.OPENAI_API_KEY,
    apiUrl: process.env.OPENAI_API_URL,
    model: process.env.OPENAI_MODEL,
}));

export const OpenAIConfigKey = openAIConfig.KEY;
export type OpenAIConfig = ConfigType<typeof openAIConfig>;
