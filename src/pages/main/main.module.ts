import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home/home";
import {TabsPage} from "./tabs/tabs";
import {AccountPage} from "./account/account";
import {AddMirrorPage} from "./add-mirror/add-mirror";
import { QRScanner } from '@ionic-native/qr-scanner';
import {AddMirrorQrCodePage} from "./add-mirror/add-mirror-qr-code/add-mirror-qr-code";
import {MirrorLinkProvider} from "../../providers/mirror/mirror-link/mirror-link.service";

@NgModule({
  declarations: [
    HomePage,
    TabsPage,
    AccountPage,
    AddMirrorPage,
    AddMirrorQrCodePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(TabsPage),
    IonicPageModule.forChild(AccountPage),
    IonicPageModule.forChild(AddMirrorPage),
    IonicPageModule.forChild(AddMirrorQrCodePage)
  ],
  exports: [
    HomePage,
    TabsPage,
    AccountPage,
    AddMirrorPage,
    AddMirrorQrCodePage
  ],
  providers: [
    QRScanner,
    MirrorLinkProvider
  ]
})

export class MainModule {
}
