import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectIntroductionRoutingModule } from './project-introduction-routing.module';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { IntroduceListComponent } from './introduce-list/introduce-list.component';


@NgModule({
  declarations: [ProjectIntroductionComponent, IntroduceListComponent],
  imports: [
    CommonModule,
    ProjectIntroductionRoutingModule
  ]
})
export class ProjectIntroductionModule { }
