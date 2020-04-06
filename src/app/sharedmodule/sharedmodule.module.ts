/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:46:28
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-02 10:57:55
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgtitleComponent } from './imgtitle/imgtitle.component';
import { RightButtonComponent } from './right-button/right-button.component';
import { ViewerComponent } from './viewer/viewer.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';



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
    LoginBtnComponent
  ],
})
export class SharedmoduleModule { }
