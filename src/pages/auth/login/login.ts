import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {TabsPage} from "../../main/tabs/tabs";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {LostPasswordPage} from "../lost-password/lost-password";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    registerPage: any = RegisterPage;
    tabsPage: any = TabsPage;
    lostPasswordPage: any = LostPasswordPage;

    public email: string = null;
    public password: string = null;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
                private auth: AuthServiceProvider, private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
    }

    login() {
        let loading = this.loadingCtrl.create({
            content: 'Connexion en cours...'
        });

        loading.present();

        this.auth.login(this.email, this.password).then(data => {
            loading.dismiss();
            this.navCtrl.setRoot(this.tabsPage);
        }).catch(data => {
            loading.dismiss();
            let alert = this.alertCtrl.create({
                title: 'Erreur',
                subTitle: data,
                buttons: [{text: 'Ok'}]
            });
            alert.present();
        })
    }

}
