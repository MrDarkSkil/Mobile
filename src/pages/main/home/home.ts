import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {AddMirrorPage} from "../add-mirror/add-mirror";
import {MirrorProvider} from "../../../providers/mirror/mirror.service";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {MirrorDto} from "../../../providers/mirror/mirror.dto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public mirrors: MirrorDto[];

  constructor(public navCtrl: NavController, private mirrorProvider: MirrorProvider, private auth: AuthServiceProvider) {
  }

  ionViewDidEnter() {
    this.auth.getUserToken().then(result => {
      const token = result;
      this.mirrorProvider.getMirrors(token).then(mirrors => {
        this.mirrors = mirrors;
      })
    });
  }

  public navigate() {
    this.navCtrl.push(AddMirrorPage);
  }

}
