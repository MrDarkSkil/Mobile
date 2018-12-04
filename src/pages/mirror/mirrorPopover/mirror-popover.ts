import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  selector: 'mirror-popover',
  templateUrl: 'mirror-popover.html'
})
export class MirrorPopoverComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
  }

  public logout() {
    this.viewCtrl.dismiss({logout: true});
  }

}
