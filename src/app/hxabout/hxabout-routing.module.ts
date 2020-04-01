/*
 * @Author: wjy-mac
 * @Date: 2020-04-01 23:31:19
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-01 23:35:40
 * @Description: file content
 */
import { HxaboutComponent } from './hxabout/hxabout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HxaboutcontentComponent } from './hxaboutcontent/hxaboutcontent.component';
import { HxaboutlistComponent } from './hxaboutlist/hxaboutlist.component';
import { HxabouthomeComponent } from './hxabouthome/hxabouthome.component';

const routes: Routes = [
  {
    path: '',
    component: HxaboutComponent,
    children: [
      {
        path: '',
        component: HxabouthomeComponent,
      },
      {
        path: 'hxaboutlist',
        component: HxaboutlistComponent,
      },
      {
        path: 'hxcontent',
        component: HxaboutcontentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HxaboutRoutingModule { }
