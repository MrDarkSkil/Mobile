import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
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
              private mirrorUnlinkProvider: MirrorUnlinkProvider) {
  }

  ionViewDidEnter() {
    this.refresh();
  }

  public navigate() {
    this.navCtrl.push(AddMirrorPage);
  }

  private refresh() {
    this.auth.getUserToken().then(result => {
      const token = result;
      this.mirrorProvider.getMirrors(token).then(mirrors => {
        this.mirrors = mirrors;
      })
    });
  }

  public deleteMirror(id: string) {
    this.auth.getUserToken().then(result => {
      const token = result;
      this.mirrorUnlinkProvider.unlinkMirror(id, token).then(result => {
        console.log('done');
        this.refresh();
      })
    });
  }

}
