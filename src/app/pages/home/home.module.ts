import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home.router.module';

import { HomePage } from './home.page';
import {AddPageModule} from './add/add.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    AddPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
