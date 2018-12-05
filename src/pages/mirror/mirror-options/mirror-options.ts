import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {MirrorPage} from "../mirror";

@Component({
  selector: 'page-mirror-options',
  templateUrl: 'mirror-options.html',
})
export class MirrorOptionsPage {

  private mirror;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.mirror = this.navParams.get('mirror');
  }

  public navigateBack() {
    this.app.getRootNavs()[0].setRoot(MirrorPage, { 'mirror': this.mirror }).then(() => {
    });
  }

}
