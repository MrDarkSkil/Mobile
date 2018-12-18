import {NgModule} from '@angular/core';
import {ApiServiceProvider} from "./api-service";
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";
import {NativeHttpBackend, NativeHttpFallback, NativeHttpModule} from "ionic-native-http-connection-backend";
import {HttpBackend, HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {Platform} from "ionic-angular";
import {PutService} from "./http/put-service";

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    NativeHttpModule
  ],
  exports: [
  ],
  providers: [
    ApiServiceProvider,
    GetService,
    PostService,
    PutService,
    {
      provide: HttpBackend,
      useClass: NativeHttpFallback,
      deps: [ Platform, NativeHttpBackend, HttpXhrBackend]
    },

  ]
})

export class ApiServiceModule {
}
