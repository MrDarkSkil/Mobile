import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {MirrorProvider} from "../../../providers/mirror/mirror.service";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";

@Component({
  selector: 'page-mirror-options',
  templateUrl: 'mirror-options.html',
})
export class MirrorOptionsPage {

  private mirror;
  private parentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
              private mirrorProvider: MirrorProvider, private authProvider: AuthServiceProvider) {
    this.mirror = this.navParams.get('mirror');
    this.parentPage = this.navParams.get('parentPage');
  }

  public navigateBack() {
    this.navCtrl.pop();
  }

  public edit() {
    let alert = this.alertCtrl.create({
      title: 'Changer le nom du miroir',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nom'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Valider',
          handler: data => {
            this.authProvider.getUserToken().then(token => {
              this.mirrorProvider.changeName(this.mirror.id, token, data.name).then(result => {
                this.mirror = result;
                this.parentPage.refreshMirrorInfos();
              });
            });
          }
        }
      ]
    });
    alert.present();
  }

}
