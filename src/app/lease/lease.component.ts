import { UserloginService } from './../userlogin.service';
/*
 * @Author: wjy-mac
 * @Date: 2020-03-25 14:30:22
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-03-27 13:51:23
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
  showHouse: boolean; // 是否显示房数据
  housedata: any; // 当前选中房数据
  constructor(private loginfn: UserloginService) { }

  ngOnInit(): void {
    // this.showLogin = true;
    this.showLdlist = false;
    this.showDylist = false;
    this.ldlist = [
      {name: '全部', id: 0, child: [
        {name: '一号', id: 1},
        {name: '二号', id: 2},
      ]},
      {name: '高层', id: 1, child: [
        {name: '一号', id: 1},
        {name: '二号', id: 2},
        {name: '三号', id: 3},
      ]},
      {name: '中层', id: 2, child: [
        {name: '一号', id: 1},
        {name: '二号', id: 2},
      ]},
      {name: '低层', id: 3, child: [
        {name: '一号', id: 1},
        {name: '二号', id: 2},
      ]},
    ];
    this.nowld = this.ldlist[0];
    this.dylist = this.nowld.child;
    this.nowdy = this.dylist[0];
    this.houselist = [
      {name: 101, id: 1, yz: 1, bz: '我是备注'},
      {name: 201, id: 2, yz: 0, bz: '我是备注'},
      {name: 301, id: 3, yz: 1, bz: '我是备注'},
      {name: 401, id: 4, yz: 1, bz: '我是备注'},
      {name: 501, id: 5, yz: 1, bz: '我是备注'},
      {name: 601, id: 6, yz: 1, bz: '我是备注'},
      {name: 701, id: 7, yz: 1, bz: '我是备注'},
      {name: 801, id: 8, yz: 1, bz: '我是备注'},
      {name: 901, id: 9, yz: 1, bz: '我是备注'},
      {name: 1001, id: 10, yz: 1, bz: '我是备注'},
      {name: 2001, id: 11, yz: 1, bz: '我是备注'},
      {name: 3001, id: 12, yz: 1, bz: '我是备注'},
      {name: 4001, id: 13, yz: 1, bz: '我是备注'},
      {name: 5001, id: 14, yz: 1, bz: '我是备注'},
      {name: 6001, id: 15, yz: 1, bz: '我是备注'},
      {name: 7001, id: 16, yz: 1, bz: '我是备注'},
      {name: 8001, id: 17, yz: 1, bz: '我是备注'},
      {name: 9001, id: 18, yz: 1, bz: '我是备注'},
      {name: 10001, id: 19, yz: 1, bz: '我是备注'},
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
  /**
   * @Author: wjy-mac
   * @description: 登录
   * @Date: 2020-03-25 22:44:46
   * @param {type} 
   * @return: 
   */  
  subfn(data) {
    console.log(data);
    if (data.isbc) {
      window.sessionStorage.setItem('user', data.user);
    }
    this.closeLogin();
    this.loginfn.setLogin();
    this.islogin = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 显示房源数据
   * @Date: 2020-03-25 22:44:25
   * @param {type} item 房数据
   * @return: 
   */  
  showHousedata(item) {
    if (!this.islogin) {
      return false;
    }
    const data = {
      dname: this.nowld.name,
      dyname: this.nowdy.name
    };
    this.housedata = Object.assign(data, item);
    this.showHouse = true;
  }
  /**
   * @Author: wjy-mac
   * @description: 关闭房源窗口
   * @Date: 2020-03-25 22:49:29
   * @param {type} 
   * @return: 
   */  
  closeHouse() {
    this.showHouse = false;
  }
  /**
   * @Author: wjy-mac
   * @description: 提交房源数据
   * @Date: 2020-03-25 22:49:45
   * @param {type} 
   * @return: 
   */  
  subHouse(data) {
    console.log(data)
    if (data.yz) {
      data.yz = 1;
    } else {
      data.yz = 0;
    }
    delete data.dname;
    delete data.dyname;
    for (let index = 0; index < this.houselist.length; index++) {
      const element = this.houselist[index];
      if (element.id === data.id) {
        this.houselist.splice(index, 1, data);
        break;
      }
    }
    this.closeHouse();
  }
}
