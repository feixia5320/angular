import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { lsy } from '../../store/lsy.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ngrx-lsy',
  templateUrl: './ngrx.lsy.component.html',
  styleUrls: ['./ngrx.lsy.component.css']
})
export class NgrxLsyComponent implements OnInit {
  tagState$: Observable<lsy>;
  tagStateSubscription: Subscription;
  lsy: lsy;
  constructor(private store: Store<any>) {
    this.tagState$ = store.select('lsy');
  }
  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsy = state;
    });
  }

}
