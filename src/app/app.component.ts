import { Product } from './momo/test';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart1';
  product : Product = {
    name:'Hat',
    quantity:200,
    price:500
  }
}
