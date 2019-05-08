import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, Platform, ToastController} from "ionic-angular";
import {AddMirrorQrCodePage} from "./add-mirror-qr-code/add-mirror-qr-code";
import {MirrorProvider} from "../../../providers/mirror/mirror.service";
@Component({
  selector: 'page-add-mirror',
  templateUrl: 'add-mirror.html',
})
export class AddMirrorPage {

  public mirrorId: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
              private mirrorProvider: MirrorProvider, private platform: Platform,
              private alertCtrl: AlertController) {
  }

  public linkMirror() {
    if (this.mirrorId) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

        this.mirrorProvider.mirrorLink(this.mirrorId).then(result => {
          loading.dismiss();

          let toast = this.toastCtrl.create({
            message: 'Votre miroir à été lié à votre compte!',
            duration: 3000,
            position: 'top'
          });

          toast.present();
          this.navCtrl.pop();
        })
          .catch(error => {
            loading.dismiss();

            let toast = this.toastCtrl.create({
              message: 'Erreur: Il semblerait que l\'ID ne soit pas valide',
              duration: 3000,
              position: 'top'
            });

            toast.present();
            console.log(error);
          });

    } else {
      let toast = this.toastCtrl.create({
        message: 'Erreur: Veuillez remplir l\'id du miroir',
        duration: 3000,
        position: 'top'
      });

      toast.present();
    }
  }

  public navigate() {
    if (this.platform.is('cordova') == true) {
      this.navCtrl.push(AddMirrorQrCodePage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'This feature only works on native devices',
        buttons: [{text: 'Ok'}]
      });
      alert.present();
    }
  }

  public close(event?) {
    this.navCtrl.pop();
  }
}
