/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:46:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-06 22:17:40
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgtitleComponent } from './imgtitle/imgtitle.component';
import { RightButtonComponent } from './right-button/right-button.component';
import { ViewerComponent } from './viewer/viewer.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    ImgtitleComponent,
    RightButtonComponent,
    ViewerComponent,
    LoginBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RightButtonComponent,
    ImgtitleComponent,
    ViewerComponent,
    LoginBtnComponent,
    FlexLayoutModule
  ],
})
export class SharedmoduleModule { }
