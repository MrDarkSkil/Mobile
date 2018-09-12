import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {AddMirrorPage} from "../add-mirror/add-mirror";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  public navigate() {
    this.navCtrl.push(AddMirrorPage);
  }

}
