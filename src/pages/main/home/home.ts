import { Component } from '@angular/core';
import {LoadingController, NavController} from "ionic-angular";
import {AddMirrorPage} from "../add-mirror/add-mirror";
import {MirrorProvider} from "../../../providers/mirror/mirror.service";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {MirrorDto} from "../../../providers/mirror/mirror.dto";
import {MirrorUnlinkProvider} from "../../../providers/mirror/mirror-unlink/mirror-unlink.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public mirrors: MirrorDto[];

  constructor(public navCtrl: NavController, private mirrorProvider: MirrorProvider, private auth: AuthServiceProvider,
              private mirrorUnlinkProvider: MirrorUnlinkProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.refresh();
  }

  public navigate() {
    this.navCtrl.push(AddMirrorPage);
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
      this.mirrorUnlinkProvider.unlinkMirror(id, token).then(result => {
        console.log('done');
        this.refresh().then(() => {
          loading.dismiss();
        });
      })
    });
  }

}
