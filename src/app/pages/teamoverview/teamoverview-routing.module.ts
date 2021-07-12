import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamoverviewPage } from './teamoverview.page';


const routes: Routes = [
  {
    path: '',
    component: TeamoverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamoverviewPageRoutingModule {}
