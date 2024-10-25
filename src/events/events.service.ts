import { EventCreateInput } from '@app/events/models/event-create.input';
import { Event } from '@app/events/models/event.object';
import { OpenAIService } from '@app/openai/openai.service';
import { PrismaService } from '@app/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { EventBlockedError } from './errors/event-blocked.error';

@Injectable()
export class EventsService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly openAIService: OpenAIService,
    ) { }

    async getEvents(): Promise<Event[]> {
        return this.prismaService.event.findMany();
    }

    async getEventByUuid(uuid: string): Promise<Event> {
        return this.prismaService.event.findUnique({ where: { uuid } });
    }

    async createEvent(input: EventCreateInput): Promise<Event> {
        const summary = await this.openAIService.summarizeEvent(input.description);

        if (summary.blocked) {
            throw new EventBlockedError();
        }

        return this.prismaService.event.create({
            data: {
                name: summary.name,
                description: input.description,
                lat: input.lat,
                lng: input.lng,
                severity: summary.severity,
            },
        });
    }
}
