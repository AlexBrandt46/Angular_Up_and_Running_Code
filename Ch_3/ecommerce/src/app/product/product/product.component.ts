import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product'

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor() {
    this.product = new Product('', 0, '', false);
  }

  ngOnInit(): void {
    this.product = new Product('Thingie', 55, 'assets/item.jpg', true);
  }

  changeCount(event: MouseEvent, increase: boolean) : void {
    if (increase) {
      console.log('We are increasing the amount of product in the cart.', event);
      this.product.quantity++;
    }
    else {
      console.log('We are increasing the amount of product in the cart.', event);
      this.product.quantity--;
    }
  }
}
