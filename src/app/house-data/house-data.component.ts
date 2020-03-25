/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 22:39:55
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 22:48:55
 * @Description: file content
 */
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-house-data',
  templateUrl: './house-data.component.html',
  styleUrls: ['./house-data.component.scss']
})
export class HouseDataComponent implements OnInit {
  @Output() closeClick = new EventEmitter();
  @Output() subclick = new EventEmitter();
  
  @Input() formdata: any;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * @Author: wjy-mac
   * @description: 关闭房源窗口
   * @Date: 2020-03-25 22:02:43
   * @param {type} 
   * @return: 
   */  
  LoginOut() {
    this.closeClick.emit();
  }
  /**
   * @Author: wjy-mac
   * @description: 提交房源数据
   * @Date: 2020-03-25 22:02:36
   * @param {type} 
   * @return: 
   */  
  submit() {
    this.subclick.emit(this.formdata);
  }
}
