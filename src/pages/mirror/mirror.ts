import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../main/home/home";
import {TabProvider} from "../../providers/tab/tab";
import {MirrorPopoverComponent} from "./mirrorPopover/mirror-popover";
import {ModuleProvider} from "../../providers/module/module";
import {AuthServiceProvider} from "../../providers/auth/auth-service";

@Component({
  selector: 'page-mirror',
  templateUrl: 'mirror.html',
})
export class MirrorPage {

  public mirror: string = null;
  public modules: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private tabProvider: TabProvider,
              private popoverCtrl: PopoverController, private moduleProvider: ModuleProvider,
              private authProvider: AuthServiceProvider) {
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidLoad() {
    this.authProvider.getUserToken().then(token => {
      this.moduleProvider.getModules(token).then(result => {
        this.modules = result;
      });
    });
  }

  public mirrorSettings(ev: UIEvent) {
    let popover = this.popoverCtrl.create(MirrorPopoverComponent, {'mirror': this.mirror});

    popover.present({
      ev: ev
    });
    popover.onDidDismiss(result => {
      if (result && result.logout) {
        this.navCtrl.setRoot(HomePage);
        this.tabProvider.displayTab();
      }
    });
  }

}
