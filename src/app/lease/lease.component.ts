import { UserloginService } from './../userlogin.service';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 14:30:22
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-25 17:48:19
 * @Description: file content
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.scss']
})
export class LeaseComponent implements OnInit {
  ldlist: any[]; // 楼栋数据
  dylist: any[]; // 单元数据
  nowld: any; // 当前选中楼栋
  nowdy: any; // 当前选中单元
  showLdlist: boolean; // 是否显示楼栋下拉
  showDylist: boolean; // 是否显示单元下拉
  houselist: any[]; // 房源
  islogin: boolean; // 是否登录
  showLogin: boolean; // 是否显示登录框
  constructor(private loginfn: UserloginService) { }

  ngOnInit(): void {
    // this.showLogin = true;
    this.showLdlist = false;
    this.showDylist = false;
    this.ldlist = [
      {name: '1栋', id: 0, child: [
        {name: '一单元', id: 1},
        {name: '二单元', id: 2},
      ]},
      {name: '3栋', id: 1, child: [
        {name: '一单元', id: 1},
        {name: '二单元', id: 2},
        {name: '三单元', id: 3},
      ]},
      {name: '4栋', id: 2, child: [
        {name: '一单元', id: 1},
        {name: '二单元', id: 2},
      ]},
      {name: '5栋', id: 3, child: [
        {name: '一单元', id: 1},
        {name: '二单元', id: 2},
      ]},
    ];
    this.nowld = this.ldlist[0];
    this.dylist = this.nowld.child;
    this.nowdy = this.dylist[0];
    this.houselist = [
      {name: 101, id: 1, yz: 1, bz: '我是备注'},
      {name: 201, id: 1, yz: -1, bz: '我是备注'},
      {name: 301, id: 1, yz: 1, bz: '我是备注'},
      {name: 401, id: 1, yz: 1, bz: '我是备注'},
      {name: 501, id: 1, yz: 1, bz: '我是备注'},
    ];
    this.loginfn.getLogin().subscribe(res => {
      console.log(res)
      this.islogin = res;
    });
  }
  /**
   * @Author: wjy-mac
   * @description: 弹出登录
   * @Date: 2020-03-25 16:31:43
   * @param {type} 
   * @return: 
   */  
  setLogin() {
    console.log('点击了')
    this.showLogin = true;
    // this.loginfn.setLogin();
    // this.islogin = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 退出登录
   * @Date: 2020-03-25 16:39:44
   * @param {type} 
   * @return: 
   */  
  setLoginout() {
    this.islogin = false;
  }
  /**
   * @Author: wjy-mac
   * @description: 设置楼栋
   * @Date: 2020-03-25 15:28:15
   * @param {type} index 点击序号
   * @return: 
   */  
  setLd(index) {
    this.nowld = this.ldlist[index];
    this.dylist = this.nowld.child;
    this.nowdy = this.dylist[0];
  }
  /**
   * @Author: wjy-mac
   * @description: 设置单元
   * @Date: 2020-03-25 15:29:44
   * @param {type} 
   * @return: 
   */  
  setdy(index) {
    this.nowdy = this.dylist[index];
  }
  /**
   * @Author: wjy-mac
   * @description: 显示或隐藏楼栋
   * @Date: 2020-03-25 15:40:57
   * @param {type} 
   * @return: 
   */  
  showLd(event: Event) {
    event.stopPropagation();
    if (this.showDylist) {
      this.showDylist = false;
    }
    this.showLdlist = !this.showLdlist;
  }
  /**
   * @Author: wjy-mac
   * @description: 显示或隐藏单元
   * @Date: 2020-03-25 15:40:49
   * @param {type} 
   * @return: 
   */  
  showDy(event: Event) {
    event.stopPropagation();
    if (this.showLdlist) {
      this.showLdlist = false;
    }
    this.showDylist = !this.showDylist;
  }
  /**
   * @Author: wjy-mac
   * @description: 隐藏下拉列表
   * @Date: 2020-03-25 15:41:27
   * @param {type} 
   * @return: 
   */  
  hideList() {
    this.showLdlist = false;
    this.showDylist = false;
  }
  /**
   * @Author: wjy-mac
   * @description: 关闭登录框
   * @Date: 2020-03-25 16:59:02
   * @param {type} 
   * @return: 
   */  
  closeLogin() {
    this.showLogin = false;
  }
}
