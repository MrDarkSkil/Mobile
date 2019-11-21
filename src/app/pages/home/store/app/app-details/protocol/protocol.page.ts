import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.page.html',
  styleUrls: ['./protocol.page.scss'],
})
export class ProtocolPage {

  constructor(private modalCtrl: ModalController) { }

  close() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
