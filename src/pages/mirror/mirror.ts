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

  public mirror: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tabProvider: TabProvider,
              private popoverCtrl: PopoverController) {
    this.mirror = this.navParams.get('mirror');
  }

  public mirrorSettings(ev: UIEvent) {
    let popover = this.popoverCtrl.create(MirrorPopoverComponent, { 'mirror': this.mirror });

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
