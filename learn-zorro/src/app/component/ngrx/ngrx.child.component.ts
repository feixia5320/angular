import { Component, OnInit, Input } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { chifan, shuijiao, xiedaima } from '../../store/lsy.action';
import { lsy, initLsy } from '../../store/lsy.model';

@Component({
  selector: 'ngrx-child',
  templateUrl: './ngrx.child.component.html',
  styleUrls: ['./ngrx.child.component.css']
})
export class NgrxChildComponent implements OnInit {
  @Input('title') title: string;
  value1 = "";
  value2 = "";
  value3 = "";
  tagState$: Observable<lsy>;
  private tagStateSubscription: Subscription;
  constructor(private store: Store<any>) {
    this.tagState$ = store.select('lsy');
  }
  ngOnInit() {
  }
  changezui(val) {
    this.store.dispatch({
      type: chifan,
      gaoshiqing: val
    });
  }
  changeshou(val) {
    this.store.dispatch({
      type: shuijiao,
      gaoshiqing: val
    });
  }
  changetou(val) {
    this.store.dispatch({
      type: xiedaima,
      gaoshiqing: val
    });
  }

}
