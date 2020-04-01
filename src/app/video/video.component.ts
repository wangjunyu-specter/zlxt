/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 21:44:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-01 22:23:37
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';
declare var ckplayer: any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  player: any;
  constructor() { }

  ngOnInit(): void {
    this.videoPlay();
  }
  videoPlay(){
    const videoObject = {
        container: '#video',//“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
        autoplay: true,//自动播放
        live: true,
        poster: '../../assets/bjimg/hxzs.jpg',//视频封面
        video:'../../assets/video/video.mp4'//视频地址
    };
    this.player = new ckplayer(videoObject);
}
}
