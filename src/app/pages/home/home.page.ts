import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddPage} from './add/add.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public modalController: ModalController) {
  }

  public async AddMirror() {
    const modal = await this.modalController.create({
      component: AddPage
    });
    return await modal.present();
  }

}
