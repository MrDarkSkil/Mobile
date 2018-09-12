import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceProvider} from "../api-service/api-service";
import {AuthServiceProvider} from "../auth/auth-service";
import {MirrorProvider} from "./mirror.service";

@NgModule({
  declarations: [
    MirrorProvider
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

export class MirrorModule {
}
