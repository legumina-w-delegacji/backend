import { Inject, Injectable, Logger } from "@nestjs/common";
import { FirebaseConfig, FirebaseConfigKey, FirebaseConfigToken } from "@app/config/firebase.config";
import admin from "firebase-admin";
import { Event } from "@prisma/client";

@Injectable()
export class FirebaseService {
    private readonly logger = new Logger(FirebaseService.name);

    constructor(@Inject(FirebaseConfigKey) private readonly firebaseConfig: FirebaseConfig) {
        admin.initializeApp({
            credential: this.firebaseConfig.credential,
        });
    }

    async subscribeToTopic(token: string, topic: string): Promise<boolean> {
        const response = await admin.messaging().subscribeToTopic(token, topic);

        if (response.failureCount > 0) {
            this.logger.error(`Failed to subscribe to topic: ${JSON.stringify(response.errors)}`);
        }

        return response.successCount > 0;
    }

    async sendNewEventNotification(event: Event): Promise<void> {
        await admin.messaging().send({
            data: {
                eventUuid: event.uuid,
            },
            notification: {
                title: 'Ktoś w pobliżu potrzebuje pomocy!',
                body: `Zgłoszenie: ${event.name}`,
            },
            topic: 'NEW_EVENT',
        });
    }
}