import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home/home";
import {TabsPage} from "./tabs/tabs";
import {AccountPage} from "./account/account";
import {AddMirrorPage} from "./add-mirror/add-mirror";
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import {AddMirrorQrCodePage} from "./add-mirror/add-mirror-qr-code/add-mirror-qr-code";
import {MirrorProvider} from "../../providers/mirror/mirror.service";
import {ComponentsModule} from "../../components/components.module";
import {ShopTabsPage} from "../mirror/shop-tabs/shop-tabs";

@NgModule({
  declarations: [
    HomePage,
    TabsPage,
    AccountPage,
    AddMirrorPage,
    AddMirrorQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(TabsPage),
    IonicPageModule.forChild(ShopTabsPage),
    IonicPageModule.forChild(AccountPage),
    IonicPageModule.forChild(AddMirrorPage),
    IonicPageModule.forChild(AddMirrorQrCodePage),
    ComponentsModule,
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
    MirrorProvider
  ],
  entryComponents: [
    TabsPage
  ]
})

export class MainModule {
}
