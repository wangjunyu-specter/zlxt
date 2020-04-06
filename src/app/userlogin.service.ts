/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 16:30:09
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 16:37:11
 * @Description: file content
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private islogin: boolean;
  constructor() { }
  /**
   * @Author: wjy-mac
   * @description: 设置登录
   * @Date: 2020-03-25 16:32:46
   * @param {type} 
   * @return: 
   */  
  setLogin() {
    console.log('开始登录')
    this.islogin = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 获取是否登录
   * @Date: 2020-03-25 16:32:51
   * @param {type} 
   * @return: 
   */  
  getLogin(): Observable<boolean> {
    return of(this.islogin);
  }
}
