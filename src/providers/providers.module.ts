import {NgModule} from '@angular/core';
import {ApiServiceModule} from "./api-service/api-service.module";
import {AuthServiceProvider} from "./auth/auth-service";
import {MirrorModule} from "./mirror/mirror.module";
import {IonicStorageModule} from "@ionic/storage";
import {ModuleProvider} from "./module/module";

@NgModule({
  declarations: [],
  imports: [
    ApiServiceModule,
    IonicStorageModule.forRoot()
  ],
  exports: [],
  providers: [
    AuthServiceProvider,
    MirrorModule,
    ModuleProvider
  ]
})

export class ProvidersModule {
}
