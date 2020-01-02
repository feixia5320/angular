import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import { range } from 'rxjs/observable/range';
import { map, filter, scan } from 'rxjs/operators';

import { from } from 'rxjs/observable/from';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/share';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.create();
    // this.from2();
    // this.map();
    // this.interval();
    // this.mapto();
    // this.merge();
    // this.mergemap();
    // this.switchMap();
    // this.zip();
    // this.merge2();
    this.throttleTime();
  }
  persons = [
    { name: 'Dave', age: 34, salary: 2000 },
    { name: 'Nick', age: 37, salary: 32000 },
    { name: 'Howie', age: 40, salary: 26000 },
    { name: 'Brian', age: 40, salary: 30000 },
    { name: 'Kevin', age: 47, salary: 24000 },
  ];

  observer = {
    next: x => console.log('Observer' + x),
    error: err => console.error('error: ' + err),
    complete: () => console.log('complete'),
  };

  create() {

    let res = Observable.create(
      observer => { // 这部分就是subscribe function
        this.persons.forEach(p => observer.next(p));
        observer.complete();
      }
    );
    res.subscribe(
      person => {
        console.log(person.name)
      },
      err => console.error(err),
      () => console.log("Streaming is over.")
    );
  }

  from() {
    let persons = [
      { name: 'Dave', age: 34, salary: 2000 },
      { name: 'Nick', age: 37, salary: 32000 },
      { name: 'Howie', age: 40, salary: 26000 },
      { name: 'Brian', age: 40, salary: 30000 },
      { name: 'Kevin', age: 47, salary: 24000 },
    ];

    let index = 1;
    Observable.from(persons)
      .subscribe(
        person => {
          console.log(index++, person);
        },
        err => console.log(err),
        () => console.log("Streaming is over.")
      );
  }
  from2() {
    Observable.from([1, 2, 2, 3, 2])
      .distinct()
      .max()
      .subscribe(l => console.log(l)); // 1,2,3
  }

  map() {
    Observable.from(this.persons)
      .filter(o => o.salary > 26000)
      .map(p => {
        console.log(p);
        return p.salary;
      })
      .reduce((total, current) => total + current, 0)
      .subscribe(
        tt => {
          console.log(`Total salary is ${tt}`)
        },
        err => console.log(err)
      );
  }

  interval() {
    const numbers = Observable
      .interval(1000)
      .take(5);

    numbers.subscribe(
      x => console.log(`inter: ${x}`)
    );
  }

  mapto() {
    let firstReq = Observable.timer(3000).mapTo('First Response');
    let secondReq = Observable.timer(1000).mapTo('Second Response');

    Observable.concat(firstReq, secondReq)
      .subscribe(res => console.log(res));
  }
  merge() {
    let firstReq = Observable.timer(3000).mapTo('First Response');
    let secondReq = Observable.timer(1000).mapTo('Second Response');

    Observable.merge(firstReq, secondReq)
      .subscribe(res => console.log(res));
  }

  mergemap() {
    function getData() {
      const students = Observable.from([
        { name: 'Dave', age: 17 },
        { name: 'Nick', age: 18 },
        { name: 'Lee', age: 15 }
      ]);

      const teachers = Observable.from([
        { name: 'Miss Wan', age: 28 },
        { name: 'Mrs Wang', age: 31 },
      ]);

      return Observable.create(
        observer => {
          observer.next(students);
          observer.next(teachers);
        }
      );
    }

    getData()
      .mergeMap(persons => persons)
      .subscribe(
        p => console.log(`Subscriber got ${p.name} - ${p.age}`)
      );
  }

  switchMap() {
    const source = Observable.timer(0, 5000);
    // 当 source 发出值时切换到新的内部 observable，发出新的内部 observable 所发出的值
    const example = source.switchMap(() => Observable.interval(500));
    // 输出: 0,1,2,3,4,5,6,7,8,...0,1,2,3,4,5,6,7,8
    const subscribe = example.subscribe(val => console.log(val));
  }

  zip() {
    let age$ = Observable.of<number>(27, 25, 29);
    let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
    let isDev$ = Observable.of<boolean>(true, true, false);

    Observable
      .zip(age$, name$, isDev$, (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
      .subscribe(x => console.log(x));
  }
  merge2() {
    const source1$ = Observable.interval(500).map(x => 'source1: ' + x).take(5)
    const source2$ = Observable.interval(1000).map(x => 'source2: ' + x).take(5)
    const source3$ = Observable.of(1, 2, 3)
    source1$.merge(source2$).concat(source3$).subscribe(p => console.log(p));
  }

  throttleTime() {
    var button = document.querySelector('p');
    Observable.fromEvent(button, 'click')
      .throttleTime(1000)
      .map(event => {
        return event['clientX']
      })
      .scan((count, clientX2) => {
        return count + clientX2
      }, 0)
      .subscribe(count2 => console.log(count2));
  }
}
