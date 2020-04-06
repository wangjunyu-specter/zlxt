/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 22:58:07
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-06 21:10:17
 * @Description: file content
 */
import { SharedmoduleModule } from './../sharedmodule/sharedmodule.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectIntroductionRoutingModule } from './project-introduction-routing.module';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { IntroduceListComponent } from './introduce-list/introduce-list.component';
import { SceneryComponent } from './scenery/scenery.component';
import { ProjectintroductionContentComponent } from './projectintroduction-content/projectintroduction-content.component';

import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ProjectIntroductionComponent, IntroduceListComponent, SceneryComponent, ProjectintroductionContentComponent],
  imports: [
    CommonModule,
    ProjectIntroductionRoutingModule,
    SharedmoduleModule,
    FlexLayoutModule
  ]
})
export class ProjectIntroductionModule { }
