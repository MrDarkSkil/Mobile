import {NgModule} from '@angular/core';
import {ApiServiceModule} from "./api-service/api-service.module";
import {AuthServiceProvider} from "./auth/auth-service";
import {MirrorModule} from "./mirror/mirror.module";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [],
  imports: [
    ApiServiceModule,
    IonicStorageModule.forRoot()
  ],
  exports: [],
  providers: [
    AuthServiceProvider,
    MirrorModule
  ]
})

export class ProvidersModule {
}
