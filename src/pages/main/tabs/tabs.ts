import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {AccountPage} from "../account/account";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  account = AccountPage;
  token = null;

  constructor(private auth: AuthServiceProvider) {
    this.isLogged();
    console.log(this.token);
  }

  isLogged() {
    this.auth.getUserToken().then(token => {
      this.token = token;
    }).catch(error => {
      this.token = error;
    });
  }

}
