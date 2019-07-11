import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {MirrorService} from '../../../services/mirror/mirror.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public mirrorId: string;

  constructor(private modalCtrl: ModalController, public router: Router, private toastCtrl: ToastController,
              public loadingCtrl: LoadingController, private mirrorService: MirrorService,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
  }

  public dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
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
          position: 'top'
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
            position: 'top'
          });

          toast.present();
          console.log(error);
        });

    } else {
      const toast = await this.toastCtrl.create({
        message: 'Erreur: Veuillez remplir l\'id du miroir',
        duration: 3000,
        position: 'top'
      });

      toast.present();
    }
  }

}
