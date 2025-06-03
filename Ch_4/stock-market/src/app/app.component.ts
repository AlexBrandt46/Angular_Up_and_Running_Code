import { Component, OnInit, SimpleChanges, OnChanges, OnDestroy, DoCheck,
  AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit
 } from '@angular/core';
import { StockItemComponent } from "./stock/stock-item/stock-item.component";
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [StockItemComponent]
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  title = 'Stock Market App';

  public stocks: Array<Stock> = [];
  public stock: Stock;
  private counter: number = 1;

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
    console.log("App Component - Init");
  }

  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }

  ngDoCheck(): void {
      console.log('App Component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('App Component - On Changes - ', changes)
  }

  onToggleFavorite(stock: Stock) : void {
    // This will update the value in the stock item component
    // because it is triggered as a result of an event binding
    // from the stock item component.
    console.log('Favorite for stock', stock, ' was triggered.');
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    // This will update the value in the stock item component
    // because we are creating a new reference for the stock input.
    this.stock = new Stock(`Test Stock Company - ${ this.counter++ }`, 'TSC', 85, 80);
  }

  changeStockPrice() {
    // This will not update the value in the stock item component
    // because it is changeing the same reference and angular will
    // not check for it in the OnPush change detection strategy.
    this.stock.price += 10;
  }

  testMethod() {
    console.log('Test method in AppComponent triggered.')
  }
}
