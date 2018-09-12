import {NgModule} from '@angular/core';
import {ApiServiceModule} from "./api-service/api-service.module";
import {AuthServiceProvider} from "./auth/auth-service";
import {MirrorModule} from "./mirror/mirror.module";

@NgModule({
  declarations: [],
  imports: [
    ApiServiceModule
  ],
  exports: [],
  providers: [
    AuthServiceProvider,
    MirrorModule
  ]
})

export class ProvidersModule {
}
