import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-module-details',
  templateUrl: 'module-details.html',
})
export class ModuleDetailsPage {

  public module: any;
  public mirror: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.module = this.navParams.get('module');
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidLoad() {
    //
  }

  public install() {
    console.log('Here do stuff');
  }

}
