/*
 * @Author: wjy-mac
 * @Date: 2020-03-24 15:44:45
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-31 12:41:53
 * @Description: file content
 */
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {trigger, state, transition, style, animate} from '@angular/animations';
import { switchMap } from 'rxjs/operators';
import * as Swiper from 'swiper';
declare var Swiper;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0, marginLeft: 100 }),
        animate('300ms', style({ opacity: 1, marginLeft: 0 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, marginLeft: -100 }))
      ])
    ]),
  ]
})
export class AboutComponent implements OnInit, AfterViewInit  {
  @ViewChild('swiper') swiperDiv: ElementRef;
  type: number; // 1 公司介绍 2成达介绍
  swiperdata: any; // swiper 实例 
  activeIndex: number; // 当前swiper序号
  constructor(private route: ActivatedRoute, private elementRef: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.type = 1;
    this.activeIndex = -1;
  }
  ngAfterViewInit(): void {
    // this.activeIndex = 0;
    // this.swiperdata = new Swiper(this.swiperDiv.nativeElement, {
    //   direction : 'vertical',
    //   width: window.innerWidth,
    //   height : window.innerHeight,
    //   // virtualTranslate : true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // });
    // this.swiperdata.on('slideChangeTransitionStart', () => {
    //   this.moveStart();
    //   this.activeIndex = null;
    //   setTimeout(() => {
    //     console.log(this.swiperdata.activeIndex)
    //     this.activeIndex = this.swiperdata.activeIndex;
    //     this.moveEnd();
    //   }, 300);
    // });
  }
  moveStart() {
    console.log('开始')
  }
  moveEnd() {
    console.log('结束')
  }
  setBack() {
    this.router.navigate(['/home'])
  }
}
