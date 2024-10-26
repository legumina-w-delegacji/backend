import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { FirebaseService } from "./firebase.service";
import { SubscribeToTopicInput } from "./models/subscribe-to-topic.input";

@Resolver(() => Boolean)
export class FirebaseResolver {
    constructor(private readonly firebaseService: FirebaseService) { }

    @Mutation(() => Boolean)
    subscribeToTopic(@Args('input') input: SubscribeToTopicInput): Promise<boolean> {
        return this.firebaseService.subscribeToTopic(input.token, input.topic);
    }
}