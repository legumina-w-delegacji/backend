import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { EventStatus } from '@prisma/client';

@ObjectType()
export class Event {
    @Field(() => ID)
    uuid: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Field(() => Int)
    severity: number;

    @Field(() => Float)
    lat: number;

    @Field(() => Float)
    lng: number;

    @Field(() => EventStatus)
    status: EventStatus;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}
