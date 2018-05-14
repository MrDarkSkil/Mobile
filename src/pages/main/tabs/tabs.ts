import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {AccountPage} from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  account = AccountPage;

  constructor() {

  }
}
