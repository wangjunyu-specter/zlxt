/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 14:49:10
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-01 23:44:53
 * @Description: file content
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-right-button',
  templateUrl: './right-button.component.html',
  styleUrls: ['./right-button.component.scss']
})
export class RightButtonComponent implements OnInit {
  @Input() name: string;
  @Output() isclick = new EventEmitter<boolean>();
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  onClick() {
    // this.isclick.emit();
    this._location.back();
  }
}
