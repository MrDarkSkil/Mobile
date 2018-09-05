import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {AddMirrorQrCodePage} from "./add-mirror-qr-code/add-mirror-qr-code";

@Component({
  selector: 'page-add-mirror',
  templateUrl: 'add-mirror.html',
})
export class AddMirrorPage {

  public qrcodePage: any = AddMirrorQrCodePage;

  constructor(public navCtrl: NavController) {
  }
}
