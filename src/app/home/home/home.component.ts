/*
 * @Author: wjy-mac
 * @Date: 2020-03-23 23:42:37
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 00:03:20
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转页面
   * @Date: 2020-03-25 00:00:23
   * @param {type} 
   * @return: 
   */  
  open(path: string) {
    this.router.navigate([path]);
  }
}
