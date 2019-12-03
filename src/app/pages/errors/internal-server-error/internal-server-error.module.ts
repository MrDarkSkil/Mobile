import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternalServerErrorPage } from './internal-server-error.page';

const routes: Routes = [
  {
    path: '',
    component: InternalServerErrorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InternalServerErrorPage]
})
export class InternalServerErrorPageModule {}
