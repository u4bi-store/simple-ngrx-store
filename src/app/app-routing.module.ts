import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterComponent } from './router/router.component';
import { RouterChildComponent } from './router/router-child/router-child.component';

const routes: Routes = [
  {
    path: 'router',
    component: RouterComponent,
    children: [
      {
        path : 'child',
        component : RouterChildComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    RouterComponent,
    RouterChildComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }