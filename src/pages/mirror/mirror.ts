import {Component} from '@angular/core';
import {App, NavController, NavParams, PopoverController} from 'ionic-angular';
import {TabProvider} from "../../providers/tab/tab";
import {MirrorPopoverComponent} from "./mirrorPopover/mirror-popover";
import {AuthServiceProvider} from "../../providers/auth/auth-service";
import {ModuleDetailsPage} from "./module-details/module-details";
import {MirrorProvider} from "../../providers/mirror/mirror.service";
import {TabsPage} from "../main/tabs/tabs";
import {ModuleDto} from "../../providers/mirror/mirror.dto";

@Component({
  selector: 'page-mirror',
  templateUrl: 'mirror.html',
})
export class MirrorPage {

  public mirror: any = null;
  public modules: Array<ModuleDto> = [];
  public loader = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tabProvider: TabProvider,
              private popoverCtrl: PopoverController, private authProvider: AuthServiceProvider,
              private mirrorProvider: MirrorProvider, private app: App) {
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidEnter() {
    this.refreshMirrorInfos();
  }

  refreshMirrorInfos() {
    this.authProvider.getUserToken().then(token => {
      this.mirrorProvider.getMirror(token, this.mirror.id).then(result => {
        this.mirror = result;
        this.modules = result.modules;
        this.loader = false;
      });
    });
  }

  navigate(location: string, parameters?: any) {
    switch (location) {
      case 'module':
        this.navCtrl.push(ModuleDetailsPage, {'module': parameters, 'mirror': this.mirror});
        break;
      default:
    }
  }

  public mirrorSettings(ev: UIEvent) {
    let popover = this.popoverCtrl.create(MirrorPopoverComponent, {'mirror': this.mirror, 'parentPage': this});

    popover.present({
      ev: ev
    });
    popover.onDidDismiss(result => {
      if (result && result.logout) {
        this.app.getRootNav().setRoot(TabsPage);
        this.tabProvider.displayTab();
      }
    });
  }

}
