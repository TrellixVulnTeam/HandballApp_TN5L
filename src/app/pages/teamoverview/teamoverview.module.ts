import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamoverviewPageRoutingModule } from './teamoverview-routing.module';

import { TeamoverviewPage } from './teamoverview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamoverviewPageRoutingModule
  ],
  declarations: [TeamoverviewPage]
})
export class TeamoverviewPageModule {}
