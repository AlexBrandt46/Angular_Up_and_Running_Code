import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent implements OnInit {

  //public stock: Stock;
  public stocks: Array<Stock>;
  //public stockClasses;

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    // this.stock = new Stock('', '', 0, 0)
    // this.stockClasses = {}

    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 90, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ]
  }

  ngOnInit(): void {
    // this.stock = new Stock('Test Stock Company', 'TSC', 90, 85);
    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // let largeChange = Math.abs(diff) > 0.01;
    // this.stockClasses = {
    //   "positive": this.stock.isPositiveChange(),
    //   "negative": !this.stock.isPositiveChange(),
    //   "large-change": largeChange,
    //   "small-change": !largeChange
    // };
  }

  toggleFavorite(event: MouseEvent, index: number): void {
    console.log('We are toggling the favorite state for this stock.', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
