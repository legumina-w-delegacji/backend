import { OpenAIOptionsToken } from '@app/openai/openai.consts';
import { OpenAIOptions } from '@app/openai/openai.options';
import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { EventSummary } from './openai.classes';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class OpenAIService {
    private readonly client: OpenAI;

    constructor(@Inject(OpenAIOptionsToken) private readonly options: OpenAIOptions) {
        this.client = new OpenAI({
            apiKey: options.apiKey,
            baseURL: options.apiUrl,
        });
    }

    async summarizeEvent(description: string): Promise<EventSummary> {
        const response = await this.client.chat.completions.create({
            model: this.options.model,
            messages: [
                {
                    role: 'system',
                    content: 'Jesteś częścią systemu służącego do wspierania obywateli w sytuacjach kryzysowych. Użytkownicy mają możliwość zgłaszania zdarzenia, które są prośbą o pomoc kierowaną do innych użytkowników. Twoim zadaniem jest zweryfikowanie czy opis nie jest żartem, nie zawiera treści nieodpowiednich lub wulgarnych oraz podanie krótkiej nazwy i stopnia zagrożenia od 1 do 5. Odpowiedź musi być w formacie JSON {"blocked": <true/false>, "name": "<nazwa>", "severity": <zagrożenie>}. Jeżeli zgłoszenie zostanie uznane za niewłaściwe lub wulgarne, wartość "blocked" musi wynosić "true". Inny tekst nie powinien pojawić się w odpowiedzi.',
                },
                { role: 'user', content: `Opis zdarzenia: ${description}` },
            ],
        });

        const summary = plainToClass(EventSummary, JSON.parse(response.choices[0].message.content));

        const errors = await validate(summary);

        if (errors.length > 0) {
            return {
                name: 'Nowa prośba o pomoc',
                blocked: false,
                severity: 2,
            }
        }

        return summary;
    }
}
