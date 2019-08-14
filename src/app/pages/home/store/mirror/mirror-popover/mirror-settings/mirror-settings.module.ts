import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MirrorSettingsPage } from './mirror-settings.page';

const routes: Routes = [
  {
    path: '',
    component: MirrorSettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MirrorSettingsPage]
})
export class MirrorSettingsPageModule {}
