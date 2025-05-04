import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product'

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  public products: Array<Product>;
  public productClasses: Array<{}>;
  public quantOptions: Array<number>;

  constructor() {
    this.products = [];
    this.productClasses = [];
    this.quantOptions = [];

    for (let i: number = 1; i <= 20; i++) {
      this.quantOptions.push(i);
    }

    for (let i: number = 1; i <= 5; i++) {
      let cost: number = this.getRandomNumberInRange(1, 100);
      let onSale: boolean = this.getRandomNumberInRange(0, 2) % 2 == 0;
      this.products.push(new Product(i, `Thingie ${i}`, cost, 'assets/item.jpg', onSale));
      this.productClasses.push({
        "onSaleBackground": onSale,
        "regularPriceBackground": !onSale
      });
    }
  }

  private getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void {

  }

  changeCount(event: MouseEvent, index: number, increase: boolean) : void {
    console.log(increase);
    if (increase) {
      console.log('We are increasing the amount of product in the cart.', index, event);
      this.products[index].quantity++;
    }
    else {
      console.log('We are decreasing the amount of product in the cart.', index, event);
      this.products[index].quantity--;
    }
  }
}
