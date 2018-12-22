import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-module-details',
  templateUrl: 'module-details.html',
})
export class ModuleDetailsPage {

  public module: any;
  public mirror: any;
  public loader = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.module = this.navParams.get('module');
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidLoad() {
    //
  }

  public install() {
    this.loader = true;
    setTimeout(() => {
      console.log('Here do stuff');
      this.loader = false;
    }, 2000);
  }

}
