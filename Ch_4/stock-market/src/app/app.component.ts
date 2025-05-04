import { Component, OnInit } from '@angular/core';
import { StockItemComponent } from "./stock/stock-item/stock-item.component";
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [StockItemComponent]
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  public stocks: Array<Stock> = [];
  public stock: Stock;

  constructor() {
    console.log("constructor1")

    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 90, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ]

    this.stock = this.stocks[0];
  }

  ngOnInit(): void {
    console.log("init")
    
  }
}
