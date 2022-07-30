import { Product } from './../product-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [
    {
      id:'1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://salt.tikicdn.com/cache/280x280/ts/product/04/1d/2a/d942a923e6521f4b24b376917a54e852.JPG',
      price: 5.99,
      quantity:2,
    },
    {
      id:'2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://salt.tikicdn.com/cache/280x280/ts/product/51/e2/00/f24bb4494d3ae35139a9f1f053c046f0.jpg',
      price: 9.99,
      quantity:1,
    }
  ];
  constructor() {}

  ngOnInit() {}
  removeProduct(param: string) {
    alert('xoa product'+ param);
  }
}
