import { Component } from '@angular/core';
import {MirrorPage} from "../mirror";
import {NavParams} from "ionic-angular";
import {SearchPage} from "../search/search";
import {AppsPage} from "../apps/apps";

@Component({
  selector: 'page-shop-tabs',
  templateUrl: 'shop-tabs.html',
})
export class ShopTabsPage {

  mirror = MirrorPage;
  apps = AppsPage;
  search = SearchPage;
  params = {'mirror': null};

  constructor(public navParams: NavParams) {
    this.params.mirror = this.navParams.get('mirror');
  }

}
