import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MirrorProvider } from '../../../providers/mirror/mirror.service';
import { AuthServiceProvider } from '../../../providers/auth/auth-service';

@Component({
  selector: 'page-module-details',
  templateUrl: 'module-details.html',
})
export class ModuleDetailsPage {

  public module: any;
  public mirror: any;
  public loader = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private mirrorProvider: MirrorProvider, private authProvider: AuthServiceProvider) {
    this.module = this.navParams.get('module');
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidLoad() {
    //
  }

  public install() {
    this.loader = true;

    this.authProvider.getUserToken().then(token => {
      this.mirrorProvider.installModule(this.mirror.id, this.module.id, token).then(() => {
        this.loader = false;
      }).catch((err) => {
        console.log('install error', err);
        this.loader = false;
      });
    });
  }

}
