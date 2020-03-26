/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:12:46
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 10:51:10
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchingRoutingModule } from './matching-routing.module';
import { MatchingComponent } from './matching/matching.component';
import { PropertyservicesComponent } from './propertyservices/propertyservices.component';
import { MatchingHomeComponent } from './matching-home/matching-home.component';
import { BusinessComponent } from './business/business.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    MatchingComponent,
    PropertyservicesComponent,
    MatchingHomeComponent,
    BusinessComponent,
    // ImgtitleComponent,
    // RightButtonComponent,
    // ViewerComponent
  ],
  imports: [
    CommonModule,
    MatchingRoutingModule,
    SharedmoduleModule
  ]
})
export class MatchingModule { }
