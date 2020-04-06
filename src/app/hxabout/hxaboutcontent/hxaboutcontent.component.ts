/*
 * @Author: wjy-mac
 * @Date: 2020-03-31 12:57:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-02 00:26:01
 * @Description: file content
 */
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Swiper from 'swiper';
declare var Swiper;
@Component({
  selector: 'app-hxaboutcontent',
  templateUrl: './hxaboutcontent.component.html',
  styleUrls: ['./hxaboutcontent.component.scss']
})
export class HxaboutcontentComponent implements OnInit {
  @ViewChild('swiper') swiperDiv: ElementRef;
  swiperdata: any; // swiper 实例
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  setBack() {
    this.route.navigate(['/home'])
  }
  ngAfterViewInit(): void {
    this.swiperdata = new Swiper(this.swiperDiv.nativeElement, {
      // virtualTranslate : true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
