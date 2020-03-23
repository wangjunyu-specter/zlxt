/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 12:03:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-23 12:25:33
 * @Description: file content
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BidiModule} from '@angular/cdk/bidi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BidiModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
