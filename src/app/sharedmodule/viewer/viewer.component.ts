/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 09:52:49
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 10:02:48
 * @Description: file content
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import * as PhotoSphereViewer from 'photoSphereViewer';
declare var PhotoSphereViewer;
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @ViewChild('three') threeDiv: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    new PhotoSphereViewer({
      panorama: '../../assets/360/360.jpg',
      container: this.threeDiv.nativeElement
    })
  }
}
