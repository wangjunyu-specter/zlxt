/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 16:28:44
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 22:34:12
 * @Description: file content
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() closeClick = new EventEmitter();
  @Output() subclick = new EventEmitter();

  formdata: any;
  pwdts: boolean;
  constructor() { }

  ngOnInit(): void {
    this.formdata = {
      user: window.sessionStorage.getItem('user') || '',
      pwd: '',
      isbc: false
    };
  }
  /**
   * @Author: wjy-mac
   * @description: 关闭登录窗口
   * @Date: 2020-03-25 22:02:43
   * @param {type} 
   * @return: 
   */  
  LoginOut() {
    this.closeClick.emit();
  }
  /**
   * @Author: wjy-mac
   * @description: 登录
   * @Date: 2020-03-25 22:02:36
   * @param {type} 
   * @return: 
   */  
  submit() {
    const tel = /^1(\d){10}$/;
    if (!tel.test(this.formdata.user)) {
      this.pwdts = true;
      return false;
    }
    this.pwdts = false;

    this.subclick.emit(this.formdata);
  }
}
