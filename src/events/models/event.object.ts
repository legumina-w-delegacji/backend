import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

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

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}
