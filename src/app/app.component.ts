/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 22:58:07
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 12:23:50
 * @Description: file content
 */
import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'zlxt';
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
