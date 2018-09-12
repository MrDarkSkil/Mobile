import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {AccountPage} from "../account/account";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {AddMirrorPage} from "../add-mirror/add-mirror";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  account = AccountPage;

  constructor() {
  }
}
