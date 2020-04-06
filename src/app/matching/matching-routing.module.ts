import { PropertyservicesComponent } from './propertyservices/propertyservices.component';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:12:46
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 22:44:28
 * @Description: file content
 */
import { BusinessComponent } from './business/business.component';
import { MatchingComponent } from './matching/matching.component';
import { MatchingHomeComponent } from './matching-home/matching-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MatchingHomeComponent,
    children: [
      {path: '', component: MatchingComponent},
      {path: 'propertyservices', component: PropertyservicesComponent},
      {path: 'business', component: BusinessComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingRoutingModule { }
