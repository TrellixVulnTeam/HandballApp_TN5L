import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminePageRoutingModule } from './termine-routing.module';

import { TerminePage } from './termine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminePageRoutingModule
  ],
  declarations: [TerminePage]
})
export class TerminePageModule {}
