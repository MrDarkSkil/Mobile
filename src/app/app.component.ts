import { Component } from '@angular/core';
import {Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { TabsPage } from '../pages/main/tabs/tabs';
import {LoginPage} from "../pages/auth/login/login";
import {AuthServiceProvider} from "../providers/auth/auth-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  loginPage:any = LoginPage;
  tabsPage:any = TabsPage;
  page:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.getUserToken().then(data => {
        console.log('Token: ' + data);
        if (data) {
          this.page = this.tabsPage;
        } else {
          this.page = this.loginPage;
        }
      }).catch(data => {
        console.log('Token: ' + data);
        this.page = this.loginPage;
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
