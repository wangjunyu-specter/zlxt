/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 15:53:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-24 15:38:42
 * @Description: file content
 */
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
