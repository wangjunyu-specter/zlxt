/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 12:03:12
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 22:18:28
 * @Description: file content
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BidiModule} from '@angular/cdk/bidi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ImgtitleComponent } from './imgtitle/imgtitle.component';
import { AboutcdComponent } from './aboutcd/aboutcd.component';
import { LeaseComponent } from './lease/lease.component';
import { RightButtonComponent } from './right-button/right-button.component';
import { LoginComponent } from './login/login.component';
import { HouseDataComponent } from './house-data/house-data.component';
// import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImgtitleComponent,
    AboutcdComponent,
    LeaseComponent,
    RightButtonComponent,
    LoginComponent,
    HouseDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BidiModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule
    // HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
