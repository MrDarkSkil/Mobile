import {Injectable} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController) {
  }

  public displayAlert(title: string, message: string) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "OK",
        }
      ]
    });
    confirm.present();
  }

  public errorAlert(err: any) {
    if (err === null || err === undefined || !err.error.error) {
      this.displayAlert('Error', 'An error occurred!');
    } else {
      const text = Object.keys(err.error.error)[0];

      const title = 'Error ' + err.status;
      const message = err.error.error[text][0];

      this.displayAlert(title, message);
    }
  }
}
