import {Component} from '@angular/core';
import {HomePage} from "../home/home";
import {AccountPage} from "../account/account";
import {ModalController} from "ionic-angular";
import {AddMirrorPage} from "../add-mirror/add-mirror";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  account = AccountPage;
  modal: any;

  constructor(public modalController: ModalController) {
  }

  async navigate() {
    const modal = await this.modalController.create(AddMirrorPage, {});
    await modal.onDidDismiss(() => {
      console.log('ok');
    });
    return await modal.present();
  }
}
