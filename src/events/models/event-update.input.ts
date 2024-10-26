import { Field, Float, InputType } from '@nestjs/graphql';
import { EventStatus } from '@prisma/client';
import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';

@InputType()
export class EventUpdateInput {
    @Field(() => String)
    @IsString()
    uuid: string;

    @Field(() => EventStatus)
    status: EventStatus;
}
