import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { PagingComponent } from './paging/paging.component';
import { ThumbComponent } from './thumb/thumb.component';
import { PageComponent } from './page/page.component';


const appRoutes: Routes = [
  {
    path: 'paging',
    component: PagingComponent
  },
  {
    path: 'page/:id',
    component: PageComponent
  },
  { path: '',   redirectTo: '/paging', pathMatch: 'full' },
  { path: '**', component: PageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
