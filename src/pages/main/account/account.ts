import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../../auth/login/login";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  loginPage: any = LoginPage;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private auth: AuthServiceProvider) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    //
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Déconnexion',
      message: 'Êtes vous sûr de vouloir vous déconnecter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Confirmer',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Déconnexion ...'
            });

            loading.present();

            this.auth.logout().then(() => {
              /*this.tabBarElement.style.display = 'none';*/
              loading.dismiss();
              this.navCtrl.setRoot(this.loginPage);
            });
          }
        }
      ]
    });
    alert.present();
  }

}