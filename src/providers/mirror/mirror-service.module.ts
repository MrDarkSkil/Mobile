import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceProvider} from "../api-service/api-service";
import {AuthServiceProvider} from "../auth/auth-service";

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    ApiServiceProvider,
    AuthServiceProvider
  ]
})

export class MirrorServiceModule {
}
