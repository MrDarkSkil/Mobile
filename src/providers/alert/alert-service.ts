import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController) {}

  displayAlert(title: string, message: string) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log('OK clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  errorAlert(err: any) {
    const text = Object.keys(err.error.error)[0];

    const title = 'Error ' + err.status;
    const message = err.error.error[text][0];

    this.displayAlert(title,message);
  }
}
