import { EventResolver } from '@app/events/events.resolver';
import { EventsService } from '@app/events/events.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [EventsService, EventResolver],
})
export class EventsModule {}
