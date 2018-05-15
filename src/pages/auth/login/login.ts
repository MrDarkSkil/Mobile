import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {TabsPage} from "../../main/tabs/tabs";
import {ApiServiceProvider} from "../../../providers/api-service/api-service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerPage: any = RegisterPage;
  tabsPage: any = TabsPage;

  public email: string = null;
  public password: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
              private api: ApiServiceProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Connexion en cours...'
    });

    loading.present();

    this.api.getApiToken(this.email, this.password)
      .then(result => {
        loading.dismiss();
        this.navCtrl.setRoot(this.tabsPage);
      })
      .catch(error => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          subTitle: error,
          buttons: [{text: 'Ok'}]
        });
        alert.present();
      });
  }

}
