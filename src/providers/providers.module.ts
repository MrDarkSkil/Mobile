import {NgModule} from '@angular/core';
import {ApiServiceModule} from "./api-service/api-service.module";
import {AuthServiceProvider} from "./auth/auth-service";

@NgModule({
  declarations: [
  ],
  imports: [
    ApiServiceModule
  ],
  exports: [
  ],
  providers: [
    AuthServiceProvider
  ]
})

export class ProvidersModule {
}
