import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {TabsPage} from "../../main/tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerPage:any = RegisterPage;
  tabsPage:any = TabsPage;

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
      this.navCtrl.setRoot(this.tabsPage);
    }, 2000);
  }

}
