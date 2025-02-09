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

  // TODO: Research why TypeScript threw errors when leaving variables uninitialized.
  constructor() {
    this.name = '';
    this.code = '';
    this.price = 0;
    this.previousPrice = 0;
    this.positiveChange = false;
  }

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
  }
}
