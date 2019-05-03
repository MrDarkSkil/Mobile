import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../../providers/auth/auth-service";

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    public email: string = null;
    public password: string = null;
    public password_confirmation: string = null;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
                private alertCtrl: AlertController, private auth: AuthServiceProvider) {
    }

    ionViewDidLoad() {
        //
    }

    register() {
        let loading = this.loadingCtrl.create({
            content: 'Inscription en cours...'
        });

        loading.present();

        if (this.password != this.password_confirmation) {
            loading.dismiss();
            let alert = this.alertCtrl.create({
                title: 'Erreur',
                subTitle: 'Les mots de passes ne correspondent pas entre eux',
                buttons: [{text: 'Ok'}]
            });
            alert.present();
        } else {
            this.auth.register(this.email, this.password).then(data => {
                loading.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Succès',
                    subTitle: 'Vous êtes inscrit avec succès !',
                    buttons: [{
                        text: 'Yeeeees',
                        handler: () => {
                            this.navCtrl.pop();
                        }
                    }]
                });
                alert.present();
            }).catch(error => {
                loading.dismiss();
            });
        }
    }

}
