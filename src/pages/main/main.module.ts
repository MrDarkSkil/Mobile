import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home/home";
import {TabsPage} from "./tabs/tabs";
import {AccountPage} from "./account/account";


@NgModule({
  declarations: [
    HomePage,
    TabsPage,
    AccountPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(TabsPage),
    IonicPageModule.forChild(AccountPage)
  ],
  exports: [
    HomePage,
    TabsPage,
    AccountPage
  ]
})

export class MainModule {
}
