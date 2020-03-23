/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 12:03:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-23 15:58:18
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PagenotComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
