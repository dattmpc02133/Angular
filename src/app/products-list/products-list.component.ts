import { Product } from './../product-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output()
   onRemoveProduct = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  removeProduct(ProductId: string):void {
    // alert('xoa product'+ ProductId);
    this.onRemoveProduct.emit(ProductId);
   
  }
  updateQuantity(element: any){
    console.log(element.value);
  }
}
