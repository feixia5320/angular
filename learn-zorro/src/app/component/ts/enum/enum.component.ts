import { Component, OnInit } from '@angular/core';
let a  = require('./aa')

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css']
})
export class EnumComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    this.testEnum();
  }

  // 枚举
  day: Days = 9;
  days = Days;
  strEnum = StringType;
  testEnum() {
    console.log(this.day);
    console.log(this.strEnum);
  }

  // 用接口定义函数
  add: Add = (x, y) => Number( x+y)
  bdd: Bdd = (x, y) => x+y;
  lib() {
    let lib: Lib = (() => {}) as Lib; //断言为接口值
    lib.version = "sdf";
    lib.doSomething = () => {}
  }
  // 函数重载
  reload() {
    Reload('a',2, 'a')
  }
}


enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//字符串枚举
enum StringType {suc = 'sucess', fal = 'error'};

// 接口
interface Add {
  (x: number, y: string): number;
}
// or
type Bdd = (x: number, y: number) => number
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
// 函数重载
function Reload(x: number, y: number): number;
function Reload(x: string, y: number, z: string): string;
function Reload(x: any): any {
  // let item = res[0];
  // if(typeof item == "string") {
  //   return res.join(",");
  // }else{
  // }
}

type t4 = Diff<"a"|"b" | "c", "a" | "e">

module.exports = "a"