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
    }
  ]
}
