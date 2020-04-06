import { ProjectintroductionContentComponent } from './projectintroduction-content/projectintroduction-content.component';
import { SceneryComponent } from './scenery/scenery.component';
import { IntroduceListComponent } from './introduce-list/introduce-list.component';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 00:08:56
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-02 11:08:50
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
      },
      {
        path: 'scenery',
        component: SceneryComponent
      },
      {
        path: 'projectcontent',
        component: ProjectintroductionContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectIntroductionRoutingModule { }
