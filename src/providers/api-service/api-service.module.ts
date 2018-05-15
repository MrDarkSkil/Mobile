import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceProvider} from "./api-service";
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";

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
    GetService,
    PostService
  ]
})

export class ApiServiceModule {
}
