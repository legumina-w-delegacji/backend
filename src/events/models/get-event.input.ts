import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetEventInput {
    @Field(() => String)
    uuid: string;
}
