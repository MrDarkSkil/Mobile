import {NgModule} from '@angular/core';
import {LoginPage} from "./login/login";
import {IonicPageModule} from "ionic-angular";
import {RegisterPage} from "./register/register";
import {LostPasswordPage} from "./lost-password/lost-password";


@NgModule({
    declarations: [
        LoginPage,
        RegisterPage,
        LostPasswordPage
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
        IonicPageModule.forChild(RegisterPage),
        IonicPageModule.forChild(LostPasswordPage),
    ],
    exports: [
        LoginPage,
        RegisterPage,
        LostPasswordPage
    ]
})

export class AuthModule {
}
