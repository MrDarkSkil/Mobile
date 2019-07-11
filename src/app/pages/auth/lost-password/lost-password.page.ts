import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.page.html',
  styleUrls: ['./lost-password.page.scss'],
})
export class LostPasswordPage implements OnInit {

  public email: string = null;

  constructor(public router: Router, public loadingCtrl: LoadingController, private auth: AuthService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async lostPassword() {
    const loading = await this.loadingCtrl.create({
      message: 'Envoi en cours...'
    });

    loading.present();

    this.auth.lostPassword(this.email).then(async data => {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Succès',
        subHeader: 'Vous allez recevoir un email pour réinitialiser votre mot de passe !',
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }]
      });
      alert.present();
    }).catch(async error => {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        subHeader: error,
        buttons: [{text: 'Ok'}]
      });
      alert.present();
    });
  }

}
