import {NgModule} from '@angular/core';
import {ApiServiceProvider} from "./api-service";
import {NativeHttpBackend, NativeHttpFallback, NativeHttpModule} from "ionic-native-http-connection-backend";
import {HttpBackend, HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {Platform} from "ionic-angular";

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
    {
      provide: HttpBackend,
      useClass: NativeHttpFallback,
      deps: [ Platform, NativeHttpBackend, HttpXhrBackend]
    },

  ]
})

export class ApiServiceModule {
}
