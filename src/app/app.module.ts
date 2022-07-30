import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';


@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    ProductsListComponent,
    CartSummaryComponent,
    PromoCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
