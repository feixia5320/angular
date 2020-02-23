import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../../store/counter';

interface AppState {
  count: number;
}
@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) { // 注入store
    this.count$ = store.pipe(select('count')); // 从app.module.ts中获取count状态流
  }
  ngOnInit() {
    
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
