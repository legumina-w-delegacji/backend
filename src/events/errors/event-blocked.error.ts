import { GraphQLError } from "graphql";

export class EventBlockedError extends GraphQLError {
    static code: string = 'EVENT_BLOCKED';

    constructor() {
        super('Event description has been blocked due to violation of community rules.', {
            extensions: {
                code: EventBlockedError.code,
            }
        });
    }
}