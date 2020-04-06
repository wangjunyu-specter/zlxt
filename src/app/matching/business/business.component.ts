/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:18:13
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 10:52:18
 * @Description: file content
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  setBack() {
    this.router.navigate(['/matching']);
  }
}
