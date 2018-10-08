import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../main/home/home";
import {TabProvider} from "../../providers/tab/tab";

@Component({
  selector: 'page-mirror',
  templateUrl: 'mirror.html',
})
export class MirrorPage {

  public mirrorName: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tabProvider: TabProvider) {
    this.mirrorName = this.navParams.get('name');
  }

  public navigate(location: string) {
    switch (location) {
      case 'home':
        this.navCtrl.setRoot(HomePage);
        this.tabProvider.displayTab();
        break;
      default:
    }
  }

}
