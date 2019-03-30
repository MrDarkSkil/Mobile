import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {ModuleProvider} from "../../../providers/module/module";
import {ModuleDetailsPage} from "../module-details/module-details";

@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html',
})
export class AppsPage {

  public loader: boolean = true;
  public modules = {};
  public mirror: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthServiceProvider,
              private moduleProvider: ModuleProvider) {
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidEnter() {
    this.refresh().then(() => {
     this.loader = false;
    });
  }

  doRefresh(event) {
    this.refresh().then(() => {
      event.complete();
    });
  }

  refresh() {
    return new Promise((resolve, reject) => {
      this.authProvider.getUserToken().then(token => {
        this.moduleProvider.getModules(token).then(result => {
          this.modules = result;
          resolve('ok');
        });
      });
    });
  }

  navigate(location: string, parameters?: any) {
    switch (location) {
      case 'module':
        this.navCtrl.push(ModuleDetailsPage, {'module': parameters, 'mirror': this.mirror});
        break;
      default:
    }
  }

}
