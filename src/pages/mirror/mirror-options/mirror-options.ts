import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-mirror-options',
  templateUrl: 'mirror-options.html',
})
export class MirrorOptionsPage {

  private mirror;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.mirror = this.navParams.get('mirror');
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
            console.log(data.name);
          }
        }
      ]
    });
    alert.present();
  }

}
