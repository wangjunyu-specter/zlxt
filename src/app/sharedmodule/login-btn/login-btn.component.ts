/*
 * @Author: wjy-mac
 * @Date: 2020-04-02 10:55:44
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-02 10:56:57
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent implements OnInit {
  @Input() name: string;
  @Output() isclick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isclick.emit();
  }
}
