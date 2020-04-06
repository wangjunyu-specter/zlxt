/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 15:53:34
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-06 21:44:03
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
