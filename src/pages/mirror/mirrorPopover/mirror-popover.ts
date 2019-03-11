import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from "ionic-angular";
import {MirrorOptionsPage} from "../mirror-options/mirror-options";

@Component({
  selector: 'mirror-popover',
  templateUrl: 'mirror-popover.html'
})
export class MirrorPopoverComponent {

  text: string;
  private mirror;
  private parentPage;

  constructor(private viewCtrl: ViewController, private navParams: NavParams,
              private navCtrl: NavController) {
    this.mirror = this.navParams.get('mirror');
    this.parentPage = this.navParams.get('parentPage');
  }

  public logout() {
    this.viewCtrl.dismiss({logout: true});
  }

  public navigate() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(MirrorOptionsPage, {'mirror': this.mirror, 'parentPage': this.parentPage});
  }

}
