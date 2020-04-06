/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:13:08
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 10:22:50
 * @Description: file content
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * @Author: wjy-mac
   * @description: 跳转页面
   * @Date: 2020-03-26 10:22:13
   * @param {type} path 路由地址
   * @return: 
   */  
  openPage(path: string) {
    this.router.navigate([path])
  }
}
