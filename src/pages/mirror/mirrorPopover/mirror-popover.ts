import {Component} from '@angular/core';
import {App, NavController, NavParams, ViewController} from "ionic-angular";
import {MirrorOptionsPage} from "../mirror-options/mirror-options";

@Component({
  selector: 'mirror-popover',
  templateUrl: 'mirror-popover.html'
})
export class MirrorPopoverComponent {

  text: string;
  private mirror;

  constructor(private viewCtrl: ViewController, private app: App, private navParams: NavParams,
              private navCtrl: NavController) {
    this.mirror = this.navParams.get('mirror');
  }

  public logout() {
    this.viewCtrl.dismiss({logout: true});
  }

  public navigate() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(MirrorOptionsPage, {'mirror': this.mirror});
  }

}
