import { Component } from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../main/home/home";
import {TabProvider} from "../../providers/tab/tab";
import {MirrorPopoverComponent} from "./mirrorPopover/mirror-popover";

@Component({
  selector: 'page-mirror',
  templateUrl: 'mirror.html',
})
export class MirrorPage {

  public mirrorName: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tabProvider: TabProvider,
              private popoverCtrl: PopoverController) {
    this.mirrorName = this.navParams.get('name');
  }
  
  public mirrorSettings(ev: UIEvent) {
    let popover = this.popoverCtrl.create(MirrorPopoverComponent);

    popover.present({
      ev: ev
    });
    popover.onDidDismiss(result => {
      if (result && result.logout) {
        this.navCtrl.setRoot(HomePage);
        this.tabProvider.displayTab();
      }
    });
  }

}
