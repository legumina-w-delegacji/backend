import { ConfigType, registerAs } from '@nestjs/config';
import admin from 'firebase-admin';

export const FirebaseConfigToken = 'FIREBASE_CONFIG';

export const firebaseConfig = registerAs(FirebaseConfigToken, () => ({
    credential: admin.credential.cert(process.env.FIREBASE_CREDENTIALS),
}));

export const FirebaseConfigKey = firebaseConfig.KEY;
export type FirebaseConfig = ConfigType<typeof firebaseConfig>;
