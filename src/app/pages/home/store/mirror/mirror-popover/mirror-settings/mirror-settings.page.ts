import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {MirrorService} from '../../../../../../services/mirror/mirror.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mirror-settings',
  templateUrl: './mirror-settings.page.html',
  styleUrls: ['./mirror-settings.page.scss'],
})
export class MirrorSettingsPage {

  public mirror;

  constructor(private alertCtrl: AlertController, private mirrorService: MirrorService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params.mirror) {
        this.mirror = JSON.parse(params['mirror']);
      }
    });
  }

  public async edit() {
    const alert = await this.alertCtrl.create({
      header: 'Changer le nom du miroir',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nom'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Valider',
          handler: data => {
            this.mirrorService.changeName(this.mirror.id, data.name).then(result => {
              this.mirror = result;
              console.log('changed!', this.mirror);
            });
          }
        }
      ]
    });
    alert.present();
  }

}
