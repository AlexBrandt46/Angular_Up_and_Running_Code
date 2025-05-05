import { Component, input, output } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent {

  public stock = input<Stock>();
  public toggleFavorite = output<Stock>();
  //public stockClasses;

  constructor() {
    console.log('StockItemComponent constructor()')
  }

  onToggleFavorite(event: MouseEvent): void {
    this.toggleFavorite.emit(this.stock()!);
  }
}
