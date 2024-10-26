import { Global, Module } from "@nestjs/common";
import { FirebaseService } from "./firebase.service";
import { FirebaseResolver } from "./firebase.resolver";

@Global()
@Module({
    providers: [FirebaseService, FirebaseResolver],
    exports: [FirebaseService],
})
export class FirebaseModule {
}