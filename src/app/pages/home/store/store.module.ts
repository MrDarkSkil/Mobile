import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePage } from './store.page';
import {StorePageRoutingModule} from './store.router.module';
import {MirrorPopoverComponent} from './mirror/mirror-popover/mirror-popover.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule
  ],
  declarations: [
    StorePage,
    MirrorPopoverComponent
  ],
  entryComponents: [
    MirrorPopoverComponent
  ]
})
export class StorePageModule {}
