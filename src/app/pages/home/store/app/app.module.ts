import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppPage } from './app.page';
import {AppCategoryPage} from './app-category/app-category.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppPage, AppCategoryPage],
  entryComponents: [AppCategoryPage]
})
export class AppPageModule {}
