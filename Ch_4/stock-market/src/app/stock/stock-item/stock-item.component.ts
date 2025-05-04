import { Component, input } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent {

  //public stock: Stock;
  public stock = input<Stock>();
  //public stockClasses;

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    console.log(this.stock())
    console.log('test')
  }

  toggleFavorite(event: MouseEvent): void {
    console.log('We are toggling the favorite state for this stock.', event);
    this.stock()!.favorite = !this.stock()!.favorite;
  }
}
