import { SharedmoduleModule } from './../sharedmodule/sharedmodule.module';
/*
 * @Author: wjy-mac
 * @Date: 2020-04-01 23:31:19
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-01 23:40:12
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HxaboutRoutingModule } from './hxabout-routing.module';
import { HxaboutComponent } from './hxabout/hxabout.component';
import { HxabouthomeComponent } from './hxabouthome/hxabouthome.component';
import { HxaboutlistComponent } from './hxaboutlist/hxaboutlist.component';
import { HxaboutcontentComponent } from './hxaboutcontent/hxaboutcontent.component';

@NgModule({
  declarations: [HxaboutComponent, HxabouthomeComponent, HxaboutlistComponent, HxaboutcontentComponent],
  imports: [
    CommonModule,
    HxaboutRoutingModule,
    SharedmoduleModule
  ]
})
export class HxaboutModule { }
