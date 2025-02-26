import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockStyles;

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    this.stock = new Stock('', '', 0, 0)
    this.stockStyles = {}
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 90, 85);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "1.2em" : "0.8em"
    };
  }

  toggleFavorite(event: MouseEvent): void {
    console.log('We are toggling the favorite state for this stock.', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
