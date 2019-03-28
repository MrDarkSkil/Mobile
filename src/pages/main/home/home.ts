import {Component} from '@angular/core';
import {App, LoadingController, NavController} from "ionic-angular";
import {AddMirrorPage} from "../add-mirror/add-mirror";
import {MirrorProvider} from "../../../providers/mirror/mirror.service";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {MirrorDto} from "../../../providers/mirror/mirror.dto";
import {ShopTabsPage} from "../../mirror/shop-tabs/shop-tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public mirrors: MirrorDto[];
  public loader: boolean = true;

  constructor(public navCtrl: NavController, private mirrorProvider: MirrorProvider, private auth: AuthServiceProvider,
              public loadingCtrl: LoadingController, public app: App) {
  }

  ionViewDidEnter() {
    this.refresh().then(() => {
      this.loader = false;
    });
  }

  public navigate(location: string, parameters?: any) {
    switch (location) {
      case 'addMirror':
        this.navCtrl.push(AddMirrorPage);
        break;
      case 'mirror':
        this.app.getRootNav().setRoot(ShopTabsPage, parameters);
        /*this.navCtrl.setRoot(ShopTabsPage, parameters);*/
        /*this.tabProvider.hideTab();*/
        break;
      default:
    }
  }

  public doRefresh(event) {
    this.refresh().then(() => {
      event.complete();
    });
  }

  private refresh() {

    return new Promise((resolve, reject) => {
      this.auth.getUserToken().then(result => {
        const token = result;
        this.mirrorProvider.getMirrors(token).then(mirrors => {
          this.mirrors = mirrors;
          resolve('ok');
        })
          .catch(error => {
            reject(error);
          });
      })
        .catch(error => {
          reject(error);
        });
    });
  }

  public deleteMirror(mirror: any, id: string) {
    mirror.close();
    let loading = this.loadingCtrl.create({
      content: 'Chargement...'
    });

    loading.present();
    this.auth.getUserToken().then(result => {
      const token = result;
      this.mirrorProvider.unlinkMirror(id, token).then(result => {
        console.log('done');
        this.refresh().then(() => {
          loading.dismiss();
        });
      })
    });
  }

}
