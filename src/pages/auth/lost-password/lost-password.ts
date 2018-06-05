import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../../providers/auth/auth-service";

@Component({
    selector: 'page-auth-lost-password',
    templateUrl: 'lost-password.html',
})
export class LostPasswordPage {

    public email: string = null;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
                private auth: AuthServiceProvider, private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        //
    }

    lostPassword() {
        let loading = this.loadingCtrl.create({
            content: 'Envoi en cours...'
        });

        loading.present();

        this.auth.lostPassword(this.email).then(data => {
            loading.dismiss();
            let alert = this.alertCtrl.create({
                title: 'Succès',
                subTitle: 'Vous allez recevoir un email pour réinitialiser votre mot de passe !',
                buttons: [{
                    text: 'Ok',
                    handler: () => {
                        this.navCtrl.pop();
                    }
                }]
            });
            alert.present();
        }).catch(error => {
            loading.dismiss();
            let alert = this.alertCtrl.create({
                title: 'Erreur',
                subTitle: error,
                buttons: [{text: 'Ok'}]
            });
            alert.present();
        });
    }
}
