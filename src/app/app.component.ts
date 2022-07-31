import { Product } from './product-model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  numberItem: number = 2;
  tax:number =5.99;
  discount: number =0;
  subTotal: number =15.98;

  removeProduct(ProductId:string) {
    // Xóa Sản phẩm
    const index = this.products.findIndex(product => product.id === ProductId);
    if (index !== -1) {
     this.products.splice(index, 1);
    }
    // Tính lại Tổng số lượng sản phẩm
    let numberItem = 0;
    let subTotal = 0;
    for(const product of this.products) {    
      numberItem += product.quantity;
      subTotal += product.price * product.quantity;      
    }
    this.numberItem = numberItem;
    this.subTotal = subTotal;
  }
}
