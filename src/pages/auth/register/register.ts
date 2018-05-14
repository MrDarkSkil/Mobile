import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    let loading = this.loadingCtrl.create({
      content: 'Inscription en cours...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Succès',
        subTitle: 'Vous êtes inscrit avec succès !',
        buttons: [{
          text: 'Yeeeees',
          handler: () => {
            this.navCtrl.pop();
          }
        }]
      });
      alert.present();
    }, 2000);
  }

}
