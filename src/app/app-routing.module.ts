
import { AreaComponent } from './area/area.component';
import { VideoComponent } from './video/video.component';
import { LeaseComponent } from './lease/lease.component';
import { AboutcdComponent } from './aboutcd/aboutcd.component';
import { AboutComponent } from './about/about.component';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 12:03:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-01 23:36:25
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  //   data: { preload: true, animation: 'home' }
  // },
  {
    path: 'ProjectIntroduction',
    loadChildren: () => import('./projectIntroduction/project-introduction.module').then(m => m.ProjectIntroductionModule),
    data: { preload: true }
  },
  {
    path: 'matching',
    loadChildren: () => import('./matching/matching.module').then(m => m.MatchingModule),
    data: { preload: true }
  },
  {
    path: 'hxabout',
    loadChildren: () => import('./hxabout/hxabout.module').then(m => m.HxaboutModule),
    data: { preload: true }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'aboutcd',
    component: AboutcdComponent,
    data: { animation: 'aboutcd' }
  },
  {
    path: 'lease',
    component: LeaseComponent,
    data: { animation: 'lease' }
  },
  {
    path: 'video',
    component: VideoComponent,
    data: { animation: 'video' }
  },
  {
    path: 'area',
    component: AreaComponent,
    data: { animation: 'area' }
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
