import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private auth: AuthService) { }

  ngOnInit() {
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Déconnexion',
      message: 'Êtes vous sûr de vouloir vous déconnecter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Confirmer',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Déconnexion ...'
            });

            loading.present();

            this.auth.logout().then(() => {
              loading.dismiss();
              this.navCtrl.navigateRoot('/login');
            });
          }
        }
      ]
    });
    alert.present();
  }

}
