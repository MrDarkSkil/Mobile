import { Component } from '@angular/core';
import {App, ViewController} from "ionic-angular";
import {MirrorOptionsPage} from "../mirror-options/mirror-options";

@Component({
  selector: 'mirror-popover',
  templateUrl: 'mirror-popover.html'
})
export class MirrorPopoverComponent {

  text: string;

  constructor(private viewCtrl: ViewController, private app: App) {
  }

  public logout() {
    this.viewCtrl.dismiss({logout: true});
  }

  public navigate() {
    this.viewCtrl.dismiss();
    this.app.getRootNavs()[0].push(MirrorOptionsPage).then(() => {
    });
  }

}
