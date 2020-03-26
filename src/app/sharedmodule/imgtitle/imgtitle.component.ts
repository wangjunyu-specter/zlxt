/*
 * @Author: wjy-mac
 * @Date: 2020-03-24 16:41:46
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-24 16:43:14
 * @Description: file content
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imgtitle',
  templateUrl: './imgtitle.component.html',
  styleUrls: ['./imgtitle.component.scss']
})
export class ImgtitleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
