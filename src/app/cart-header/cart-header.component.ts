import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  title = "Shopping Cart"
  @Input() numberItem:any;
  constructor() { }

  ngOnInit() {
  }

}
