import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddPage} from './add/add.page';
import {MirrorService} from '../../services/mirror/mirror.service';
import {MirrorDto} from '../../services/mirror/mirror.dto';

@Component({
  selector: 'app-tabs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  mirrors: Array<MirrorDto> = [];

  constructor(public modalController: ModalController, private mirrorService: MirrorService) {
    this.mirrorService.getMirrors().then(mirrors => {
      this.mirrors = mirrors;
    });
  }

  public async AddMirror() {
    const modal = await this.modalController.create({
      component: AddPage
    });
    return await modal.present();
  }

}
