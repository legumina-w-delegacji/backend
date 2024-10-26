import { EventsService } from '@app/events/events.service';
import { EventCreateInput } from '@app/events/models/event-create.input';
import { Event } from '@app/events/models/event.object';
import { GetEventInput } from '@app/events/models/get-event.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventUpdateInput } from './models/event-update.input';

@Resolver(() => Event)
export class EventResolver {
    constructor(private readonly eventsService: EventsService) { }

    @Query(() => [Event])
    async events(): Promise<Event[]> {
        return this.eventsService.getEvents();
    }

    @Query(() => Event, { nullable: true })
    async event(@Args('input') input: GetEventInput): Promise<Event> {
        return this.eventsService.getEventByUuid(input.uuid);
    }

    @Mutation(() => Event)
    async eventCreate(@Args('input') input: EventCreateInput): Promise<Event> {
        return this.eventsService.createEvent(input);
    }

    @Mutation(() => Event)
    async eventUpdate(@Args('input') input: EventUpdateInput): Promise<Event> {
        return this.eventsService.updateEvent(input);
    }
}
