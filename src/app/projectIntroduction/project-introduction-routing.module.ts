import { IntroduceListComponent } from './introduce-list/introduce-list.component';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 00:08:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 00:16:46
 * @Description: file content
 */
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProjectIntroductionComponent,
    children: [
      {
        path: '',
        component: IntroduceListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectIntroductionRoutingModule { }
