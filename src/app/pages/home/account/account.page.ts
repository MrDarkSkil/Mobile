import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth/auth.service';
import {UserService} from '../../../services/user/user.service';
import {UserDto} from '../../../services/user/user.dto';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public userInfos: UserDto = null;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private auth: AuthService, private userService: UserService) {
    this.userService.getUserInfos().then(result => {
      this.userInfos = result;
    });
  }

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
