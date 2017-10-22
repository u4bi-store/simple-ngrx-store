import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterComponent } from './page/router/router.component';
import { RouterChildComponent } from './page/router/router-child/router-child.component';

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
  },
  {
    path: 'lazy-router',
    loadChildren: './page/lazy-router/lazy-router.module#LazyRouterModule'
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