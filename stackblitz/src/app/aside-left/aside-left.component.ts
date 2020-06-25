import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHistoryState } from './history.selectors';
import { HistoryState } from './histroy.reducers';
@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']
})
export class AsideLeftComponent implements OnInit {

  menus: any;
  LogData=[];
  constructor(protected store$?: Store<{history:any}>) { }

  ngOnInit() {
    this.menus = [
      {title: 'DASHBOARD',icon: 'i-yibiao',url:'/1'},
      {title: 'AGENT',icon: 'i-agent',url:'/2'},
      {title: 'MY CRUISE',icon: 'i-set',url:'/3'},
      {title: 'HTLP',icon: 'i-set',url:'/4'},
    ]
      this.store$.select('history').subscribe(data => {
            data&&data.data&&this.LogData.push(data.data);
        });
    this.initData();
  }
  initData() {
    //获取历史记录的接口
       this.store$.select(getHistoryState).subscribe(data => {
            console.log(data);
            // this.LogData.push({name:data.name})
        });
  }

}