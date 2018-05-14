import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerPage:any = RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Connexion en cours...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

}
