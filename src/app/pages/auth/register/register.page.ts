import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
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
              private alertCtrl: AlertController, private auth: AuthService, private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  private validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async register() {
    const loading = await this.loadingCtrl.create({
      message: 'Inscription en cours...'
    });

    loading.present();

    if (!this.password || !this.passwordConfirmation || !this.email) {
      loading.dismiss().then(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Erreur',
          subHeader: 'Veuillez remplir le formulaire entièrement',
          buttons: [{text: 'Ok'}]
        });
        alert.present();
      });
    } else if (!this.validateEmail(this.email)) {
      loading.dismiss().then(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Erreur',
          subHeader: 'L\'email est incorrect',
          buttons: [{text: 'Ok'}]
        });
        alert.present();
      });
    } else if (this.password !== this.passwordConfirmation) {
      loading.dismiss().then(async () => {
        const alert = await this.alertCtrl.create({
          header: 'Erreur',
          subHeader: 'Les mots de passe ne correspondent pas entre eux',
          buttons: [{text: 'Ok'}]
        });
        alert.present();
      });
    } else {
      this.auth.register(this.email, this.password).then(async data => {
        loading.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Succès',
          subHeader: 'Vous êtes inscrit avec succès !',
          buttons: [{
            text: 'Yeeeees',
            handler: () => {
              this.navCtrl.back();
            }
          }]
        });
        alert.present();
      }).catch(error => {
        console.log(error);
        loading.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            header: 'Erreur',
            subHeader: error,
            buttons: [{text: 'Ok'}]
          });
          alert.present();
        });
      });
    }
  }

  goBack() {
    this.navCtrl.back();
  }

}
