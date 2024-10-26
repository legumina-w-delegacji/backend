import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class SubscribeToTopicInput {
    @Field(() => String)
    @IsString()
    topic: string;

    @Field(() => String)
    @IsString()
    token: string;
}