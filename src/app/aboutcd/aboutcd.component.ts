import { ActivatedRoute, Router } from '@angular/router';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-24 23:37:32
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 01:09:54
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutcd',
  templateUrl: './aboutcd.component.html',
  styleUrls: ['./aboutcd.component.scss']
})
export class AboutcdComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  setBack() {
    this.route.navigate(['/home'])
  }
}
