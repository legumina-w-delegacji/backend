import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, Max, Min } from 'class-validator';

@InputType()
export class EventCreateInput {
    @Field(() => String)
    @IsString()
    description: string;

    @Field(() => Float)
    @IsNumber()
    @Min(-90)
    @Max(90)
    lat: number;

    @Field(() => Float)
    @IsNumber()
    @Min(-180)
    @Max(180)
    lng: number;
}
