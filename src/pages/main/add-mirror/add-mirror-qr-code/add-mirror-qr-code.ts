import {Component} from '@angular/core';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {NavController} from "ionic-angular";
import {MirrorLinkProvider} from "../../../../providers/mirror/mirror-link/mirror-link.service";

@Component({
  selector: 'page-add-mirror-qr-code',
  templateUrl: 'add-mirror-qr-code.html',
})
export class AddMirrorQrCodePage {

  private scanSub: any;

  constructor(private qrScanner: QRScanner, public navCtrl: NavController, private mirrorService: MirrorLinkProvider) {
  }

  ionViewWillEnter() {
    this.showCamera();
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          console.log('Camera Permission Given');
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('something has been scanned', text);
            /*this.mirrorService.mirrorLink(text).then(result => {
              console.log('mirror linked');
            })
              .then(error => {
                console.log('An error occurred', error);
              });*/
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
            this.hideCamera();
            this.navCtrl.pop();
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
