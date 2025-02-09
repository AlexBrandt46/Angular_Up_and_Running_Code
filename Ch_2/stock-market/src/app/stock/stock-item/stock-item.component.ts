import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    this.stock = new Stock('', '', 0, 0)
  }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 90);
  }

  toggleFavorite(event: MouseEvent): void {
    console.log('We are toggling the favorite state for this stock.', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
