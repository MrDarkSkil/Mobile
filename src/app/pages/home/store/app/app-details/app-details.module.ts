import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppDetailsPage } from './app-details.page';
import {ProtocolPage} from './protocol/protocol.page';

const routes: Routes = [
  {
    path: '',
    component: AppDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppDetailsPage, ProtocolPage],
  entryComponents: [ProtocolPage]
})
export class AppDetailsPageModule {}
