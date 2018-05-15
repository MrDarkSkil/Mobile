import {NgModule} from '@angular/core';
import {ApiServiceProvider} from "./api-service/api-service";
import {GetService} from "./api-service/http/get-service";
import {PostService} from "./api-service/http/post-service";
import { HttpClientModule } from '@angular/common/http';

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

export class ApiModule {
}
