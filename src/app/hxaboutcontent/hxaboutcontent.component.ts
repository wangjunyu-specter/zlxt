/*
 * @Author: wjy-mac
 * @Date: 2020-03-31 12:57:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-31 13:07:10
 * @Description: file content
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hxaboutcontent',
  templateUrl: './hxaboutcontent.component.html',
  styleUrls: ['./hxaboutcontent.component.scss']
})
export class HxaboutcontentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  setBack() {
    this.route.navigate(['/home'])
  }
}
