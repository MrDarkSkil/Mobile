import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = null;
  public password: string = null;

  constructor(public router: Router, public loadingCtrl: LoadingController,
              private auth: AuthService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
  }

  public async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Connexion en cours...'
    });

    loading.present();

    this.auth.login(this.email, this.password).then(data => {
      loading.dismiss();
      this.router.navigate(['/']);
    }).catch(async data => {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        subHeader: data.error.message,
        buttons: [{text: 'Ok'}]
      });
      await alert.present();
    });
  }

}
