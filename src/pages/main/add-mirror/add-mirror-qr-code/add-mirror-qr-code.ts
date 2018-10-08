import {Component} from '@angular/core';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {NavController} from "ionic-angular";
import {MirrorProvider} from "../../../../providers/mirror/mirror.service";
import {AuthServiceProvider} from "../../../../providers/auth/auth-service";

@Component({
  selector: 'page-add-mirror-qr-code',
  templateUrl: 'add-mirror-qr-code.html',
})
export class AddMirrorQrCodePage {

  private scanSub: any;

  constructor(private qrScanner: QRScanner, public navCtrl: NavController, private mirrorProvider: MirrorProvider,
              private authProvider: AuthServiceProvider) {
  }

  ionViewWillEnter() {
    this.showCamera();
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          console.log('Camera Permission Given');
          this.scanSub = this.qrScanner.scan().subscribe(mirrorId => {
            console.log('Mirror has been scanned', mirrorId);

            this.authProvider.getUserToken().then(token => {
              this.mirrorProvider.mirrorLink(mirrorId, token).then(result => {
                console.log('mirror linked');
                this.qrScanner.hide();
                this.scanSub.unsubscribe();
                this.hideCamera();
                this.navCtrl.pop();
              })
                .catch(error => {
                  console.log('An error occurred', error);
                  this.qrScanner.hide();
                  this.scanSub.unsubscribe();
                  this.hideCamera();
                  this.navCtrl.pop();
                });
            });
          });

          this.qrScanner.show();

        } else if (status.denied) {
          console.log('Camera permission denied');
        } else {
          console.log('Permission denied for this runtime.');
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  ionViewWillLeave() {
    this.hideCamera();
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
