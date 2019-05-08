import {Component} from '@angular/core';
import {LoadingController, NavController, ToastController} from "ionic-angular";
import {AddMirrorQrCodePage} from "./add-mirror-qr-code/add-mirror-qr-code";
import {MirrorProvider} from "../../../providers/mirror/mirror.service";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
@Component({
  selector: 'page-add-mirror',
  templateUrl: 'add-mirror.html',
})
export class AddMirrorPage {

  public qrcodePage: any = AddMirrorQrCodePage;
  public mirrorId: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
              private mirrorProvider: MirrorProvider, private authProvider: AuthServiceProvider) {
  }

  public linkMirror() {
    if (this.mirrorId) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

      this.authProvider.getUserToken().then(token => {
        this.mirrorProvider.mirrorLink(this.mirrorId, token).then(result => {
          loading.dismiss();

          let toast = this.toastCtrl.create({
            message: 'Votre miroir à été lié à votre compte!',
            duration: 3000,
            position: 'top'
          });

          toast.present();
        })
          .catch(error => {
            loading.dismiss();
            console.log(error);
          })
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
    this.navCtrl.push(AddMirrorQrCodePage);
  }
}
