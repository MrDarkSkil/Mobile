import {NgModule} from '@angular/core';
import {MirrorPage} from "./mirror";
import {IonicPageModule} from "ionic-angular";
import {MirrorPopoverComponent} from "./mirrorPopover/mirror-popover";
import {MirrorOptionsPage} from "./mirror-options/mirror-options";


@NgModule({
  declarations: [
    MirrorPage,
    MirrorPopoverComponent,
    MirrorOptionsPage
  ],
  imports: [
    IonicPageModule.forChild(MirrorPage),
  ],
  entryComponents: [
    MirrorPopoverComponent,
    MirrorOptionsPage
  ],
  exports: [
    MirrorPage,
    MirrorPopoverComponent,
    MirrorOptionsPage
  ]
})

export class MirrorModule {
}
