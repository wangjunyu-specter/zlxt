/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 16:28:44
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 16:57:55
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
  constructor() { }

  ngOnInit(): void {
  }
  LoginOut() {
    this.closeClick.emit();
  }
}
