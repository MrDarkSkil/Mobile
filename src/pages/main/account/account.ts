import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../../auth/login/login";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  loginPage:any = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Déconnexion',
      message: 'Êtes vous sûr de vouloir vous déconnecter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Déconnexion ...'
            });

            loading.present();

            setTimeout(() => {
              loading.dismiss();
              this.navCtrl.setRoot(this.loginPage);
            }, 2000);
          }
        }
      ]
    });
    alert.present();
  }

}
