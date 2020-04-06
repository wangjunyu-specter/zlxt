/*
 * @Author: wjy-mac
 * @Date: 2020-03-26 10:13:41
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-26 10:53:03
 * @Description: file content
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyservices',
  templateUrl: './propertyservices.component.html',
  styleUrls: ['./propertyservices.component.scss']
})
export class PropertyservicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  setBack() {
    this.router.navigate(['/matching']);
  }
}
