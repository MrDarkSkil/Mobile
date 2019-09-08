import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {MirrorService} from '../../../services/mirror/mirror.service';
import {BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public mirrorId: string;
  private barcodeScannerOptions: BarcodeScannerOptions;
  private scannedData: BarcodeScanResult;

  constructor(private modalCtrl: ModalController, public router: Router, private toastCtrl: ToastController,
              public loadingCtrl: LoadingController, private mirrorService: MirrorService,
              private barcodeScanner: BarcodeScanner) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {
  }

  public dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log('Barcode data ' + barcodeData.text);
        this.scannedData = barcodeData;
        this.mirrorId = this.scannedData.text;
        this.linkMirror();
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  public async linkMirror() {
    if (this.mirrorId) {
      const loading = await this.loadingCtrl.create({
        message: 'Please wait...'
      });

      loading.present();

      this.mirrorService.mirrorLink(this.mirrorId).then(async result => {
        loading.dismiss();

        const toast = await this.toastCtrl.create({
          message: 'Votre miroir à été lié à votre compte!',
          duration: 3000,
          position: 'top',
          buttons: [{
            text: 'Close',
            role: 'cancel',
          }]
        });

        toast.present();
        this.modalCtrl.dismiss({
          dismissed: true
        });
      })
        .catch(async error => {
          loading.dismiss();

          const toast = await this.toastCtrl.create({
            message: 'Erreur: Il semblerait que l\'ID ne soit pas valide',
            duration: 3000,
            position: 'top',
            buttons: [{
                text: 'Close',
                role: 'cancel',
              }]
          });

          toast.present();
          console.log(error);
        });

    } else {
      const toast = await this.toastCtrl.create({
        message: 'Erreur: Veuillez remplir l\'id du miroir',
        duration: 3000,
        position: 'top',
        buttons: [{
          text: 'Close',
          role: 'cancel',
        }]
      });

      toast.present();
    }
  }

}
