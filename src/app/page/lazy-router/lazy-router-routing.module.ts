import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyRouterComponent } from './lazy-router.component';

const routes: Routes = [
  { 
    path : '',
    component : LazyRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LazyRouterComponent]
})
export class LazyRouterRoutingModule { }
