import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import {HttpBackend, HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {NativeHttpBackend, NativeHttpFallback, NativeHttpModule} from 'ionic-native-http-connection-backend';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NativeHttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {
      provide: HttpBackend,
      useClass: NativeHttpFallback,
      deps: [ Platform, NativeHttpBackend, HttpXhrBackend]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
