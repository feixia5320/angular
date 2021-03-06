import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = "http://placehold.it/320x150";
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第1个商品",1.99,3.5,"这是第1个商品，angularjs",["电子产品","通讯设备"]),
      new Product(2,"第2个商品",2.99,2.5,"这是第2个商品，angularjs",["图书","通讯设备"]),
      new Product(3,"第3个商品",3.99,4.5,"这是第3个商品，angularjs",["电子产品"]),
      new Product(4,"第4个商品",4.99,1.5,"这是第4个商品，angularjs",["通讯设备"]),
      new Product(5,"第5个商品",2.99,2.5,"这是第5个商品，angularjs",["电子产品","图书"]),
      new Product(6,"第6个商品",6.99,3.5,"这是第6个商品，angularjs",["电子产品","通讯设备"]),
    ];
    this.products.push(new Product(7,"第7个商品",6.99,3.5,"这是第6个商品，angularjs",["电子产品","通讯设备"]));
  }

}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
