import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = null;
  public password: string = null;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
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
      this.navCtrl.navigateRoot(['/home/dashboard']);
    }).catch(async data => {
      loading.dismiss();
      console.log(data);
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        subHeader: data.error.message,
        buttons: [{text: 'Ok'}]
      });
      await alert.present();
    });
  }

}
