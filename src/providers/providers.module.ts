import {NgModule} from '@angular/core';
import {ApiServiceModule} from "./api-service/api-service.module";
import {AuthServiceProvider} from "./auth/auth-service";
import {MirrorServiceModule} from "./mirror/mirror-service.module";

@NgModule({
  declarations: [],
  imports: [
    ApiServiceModule
  ],
  exports: [],
  providers: [
    AuthServiceProvider,
    MirrorServiceModule
  ]
})

export class ProvidersModule {
}
