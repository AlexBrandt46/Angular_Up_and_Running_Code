import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    this.stock = new Stock('', '', 0, 0)
    this.stockClasses = {}
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 90, 85);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };
  }

  toggleFavorite(event: MouseEvent): void {
    console.log('We are toggling the favorite state for this stock.', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
