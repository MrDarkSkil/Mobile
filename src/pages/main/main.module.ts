import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home/home";
import {TabsPage} from "./tabs/tabs";
import {AccountPage} from "./account/account";
import {AddMirrorPage} from "./add-mirror/add-mirror";
import { QRScanner } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    HomePage,
    TabsPage,
    AccountPage,
    AddMirrorPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(TabsPage),
    IonicPageModule.forChild(AccountPage),
    IonicPageModule.forChild(AddMirrorPage)
  ],
  exports: [
    HomePage,
    TabsPage,
    AccountPage,
    AddMirrorPage
  ],
  providers: [
    QRScanner,
  ]
})

export class MainModule {
}
