import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email: string = null;
  public password: string = null;
  public passwordConfirmation: string = null;

  constructor(public router: Router, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private auth: AuthService) { }

  ngOnInit() {
  }

  async register() {
    const loading = await this.loadingCtrl.create({
      message: 'Inscription en cours...'
    });

    loading.present();

    if (this.password !== this.passwordConfirmation) {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        subHeader: 'Les mots de passe ne correspondent pas entre eux',
        buttons: [{text: 'Ok'}]
      });
      alert.present();
    } else {
      this.auth.register(this.email, this.password).then(async data => {
        loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Succès',
          subHeader: 'Vous êtes inscrit avec succès !',
          buttons: [{
            text: 'Yeeeees',
            handler: () => {
              this.router.navigate(['/login']);
            }
          }]
        });
        alert.present();
      }).catch(error => {
        console.log(error);
        loading.dismiss();
      });
    }
  }

}
