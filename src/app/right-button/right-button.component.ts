/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 14:49:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 14:59:54
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-button',
  templateUrl: './right-button.component.html',
  styleUrls: ['./right-button.component.scss']
})
export class RightButtonComponent implements OnInit {
  @Input() name: string;
  @Output() isclick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isclick.emit();
  }
}
