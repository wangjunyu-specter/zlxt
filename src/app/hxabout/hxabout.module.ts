import { SharedmoduleModule } from './../sharedmodule/sharedmodule.module';
/*
 * @Author: wjy-mac
 * @Date: 2020-04-01 23:31:19
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-06 22:02:33
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HxaboutRoutingModule } from './hxabout-routing.module';
import { HxaboutComponent } from './hxabout/hxabout.component';
import { HxabouthomeComponent } from './hxabouthome/hxabouthome.component';
import { HxaboutlistComponent } from './hxaboutlist/hxaboutlist.component';
import { HxaboutcontentComponent } from './hxaboutcontent/hxaboutcontent.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [HxaboutComponent, HxabouthomeComponent, HxaboutlistComponent, HxaboutcontentComponent],
  imports: [
    CommonModule,
    HxaboutRoutingModule,
    SharedmoduleModule,
    FlexLayoutModule
  ]
})
export class HxaboutModule { }
