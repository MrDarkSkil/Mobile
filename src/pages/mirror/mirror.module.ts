import {NgModule} from '@angular/core';
import {MirrorPage} from "./mirror";
import {IonicPageModule} from "ionic-angular";
import {MirrorPopoverComponent} from "./mirrorPopover/mirror-popover";
import {MirrorOptionsPage} from "./mirror-options/mirror-options";
import {ModuleDetailsPage} from "./module-details/module-details";


@NgModule({
  declarations: [
    MirrorPage,
    MirrorPopoverComponent,
    MirrorOptionsPage,
    ModuleDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(MirrorPage),
  ],
  entryComponents: [
    MirrorPopoverComponent,
    MirrorOptionsPage,
    ModuleDetailsPage
  ],
  exports: [
    MirrorPage,
    MirrorPopoverComponent,
    MirrorOptionsPage,
    ModuleDetailsPage
  ]
})

export class MirrorModule {
}
