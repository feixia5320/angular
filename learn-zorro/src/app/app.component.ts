import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  navList = [
    {
      // 路由懒加载 模块
      label: 'welcome',
      url: '/welcome'
    },{
      label: 'ngrx',
      url: '/ngrx'
    },{
      label: 'ngrx-lsy',
      url: '/ngrxLsy'
    }, {
      label: 'article',
      url: '/article'
    }, {
      // 模态弹框
      label: 'modal',
      url: '/modal'
    }, {
      // ts
      label: 'ts',
      url: '/ts'
    }
  ]
}
