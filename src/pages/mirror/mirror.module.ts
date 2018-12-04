import {NgModule} from '@angular/core';
import {MirrorPage} from "./mirror";
import {IonicPageModule} from "ionic-angular";
import {MirrorPopoverComponent} from "./mirrorPopover/mirror-popover";


@NgModule({
  declarations: [
    MirrorPage,
    MirrorPopoverComponent
  ],
  imports: [
    IonicPageModule.forChild(MirrorPage),
  ],
  entryComponents: [
    MirrorPopoverComponent
  ],
  exports: [
    MirrorPage,
    MirrorPopoverComponent
  ]
})

export class MirrorModule {
}
