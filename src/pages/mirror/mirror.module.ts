import {NgModule} from '@angular/core';
import {MirrorPage} from "./mirror";
import {IonicPageModule} from "ionic-angular";


@NgModule({
  declarations: [
    MirrorPage,
  ],
  imports: [
    IonicPageModule.forChild(MirrorPage),
  ],
  exports: [
    MirrorPage
  ]
})

export class MirrorModule {
}
