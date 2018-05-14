import {NgModule} from '@angular/core';
import {LoginPage} from "./login/login";
import {IonicPageModule} from "ionic-angular";
import {RegisterPage} from "./register/register";


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(RegisterPage)
  ],
  exports: [
    RegisterPage
  ]
})

export class AuthModule {
}
