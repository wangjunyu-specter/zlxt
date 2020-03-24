/*
 * @Author: wjy-mac
 * @Date: 2020-03-24 15:44:45
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-24 17:44:18
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  type: number; // 1 公司介绍 2成达介绍
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res: any) => {
      console.log(res.params.id);
      this.type = res.params.id;
    })
  }

}
