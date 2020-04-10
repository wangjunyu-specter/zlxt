/*
 * @Author: wjy-mac
 * @Date: 2020-03-31 12:57:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-09 23:34:36
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
  @ViewChild('swiper2') swiperDiv2: ElementRef;
  swiperdata: any; // swiper 实例
  imgsrc: string[];
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.imgsrc = [
      '../../../assets/hx/7.jpg',
      '../../../assets/hx/1.jpg',
      '../../../assets/hx/2.jpg',
      '../../../assets/hx/3.jpg',
      '../../../assets/hx/4.jpg',
      '../../../assets/hx/5.jpg',
      '../../../assets/hx/6.jpg',
    ]
  }
  setBack() {
    this.route.navigate(['/home'])
  }
  ngAfterViewInit(): void {
    const thumbsSwiper = new Swiper(this.swiperDiv2.nativeElement, {
      spaceBetween: 6,
      slidesPerView: 4,
      watchSlidesVisibility: true,//防止不可点击
    })
    const gallerySwiper = new Swiper(this.swiperDiv.nativeElement, {
      spaceBetween: 0,
      zoom: {
        toggle: false,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log(gallerySwiper.zoom.enabled);
    // this.swiperdata = new Swiper(this.swiperDiv.nativeElement, {
    //   // virtualTranslate : true,
    //   room: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   // navigation: {
    //   //   nextEl: '.swiper-button-next',
    //   //   prevEl: '.swiper-button-prev',
    //   // },
    // });
  }
}
