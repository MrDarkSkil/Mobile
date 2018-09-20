import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mirror',
  templateUrl: 'mirror.html',
})
export class MirrorPage {

  public mirrorName: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mirrorName = this.navParams.get('name');
  }

}
