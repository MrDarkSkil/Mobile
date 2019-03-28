import { Component } from '@angular/core';
import {AccountPage} from "../../main/account/account";
import {MirrorPage} from "../mirror";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-shop-tabs',
  templateUrl: 'shop-tabs.html',
})
export class ShopTabsPage {

  mirror = MirrorPage;
  search = AccountPage;
  params = {'mirror': null};

  constructor(public navParams: NavParams) {
    this.params.mirror = this.navParams.get('mirror');
    console.log("yes");
  }

}
