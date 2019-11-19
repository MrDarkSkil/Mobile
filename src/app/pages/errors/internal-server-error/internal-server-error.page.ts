import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.page.html',
  styleUrls: ['./internal-server-error.page.scss'],
})
export class InternalServerErrorPage implements OnInit {

  constructor(private menuCtrl: MenuController, private statusBar: StatusBar, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.statusBar.styleLightContent();
  }

  public navigateHome() {
    this.navCtrl.navigateRoot(['/home']);
  }

}
