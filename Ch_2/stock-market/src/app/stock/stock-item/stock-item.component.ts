import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss'
})
export class StockItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    this.name = '';
    this.code = '';
    this.price = 0;
    this.previousPrice = 0;
    this.positiveChange = false;
    this.favorite = false;
  }

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 90;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(event: MouseEvent): void {
    console.log('We are toggling the favorite state for this stock.', event);
    this.favorite = !this.favorite;
  }
}
