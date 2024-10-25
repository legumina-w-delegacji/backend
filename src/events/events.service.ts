import { EventCreateInput } from '@app/events/models/event-create.input';
import { Event } from '@app/events/models/event.object';
import { PrismaService } from '@app/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
    constructor(private readonly prismaService: PrismaService) {}

    async getEvents(): Promise<Event[]> {
        return this.prismaService.event.findMany();
    }

    async getEventByUuid(uuid: string): Promise<Event> {
        return this.prismaService.event.findUnique({ where: { uuid } });
    }

    async createEvent(input: EventCreateInput): Promise<Event> {
        return this.prismaService.event.create({
            data: {
                name: 'GPT Summary',
                description: input.description,
                lat: input.lat,
                lng: input.lng,
                severity: 5,
            },
        });
    }
}
