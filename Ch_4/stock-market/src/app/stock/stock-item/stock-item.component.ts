import { Component, input, output, ChangeDetectionStrategy, SimpleChanges,
  OnInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit
 } from '@angular/core';

import { Stock } from '../../model/stock'

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  public stock = input<Stock>();
  public toggleFavorite = output<Stock>();
  //public stockClasses;

  constructor() {
    console.log('StockItemComponent constructor()')
  }

  ngOnInit(): void {
    console.log('Stock Item Component - On Init');
  }

  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
  }

  ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
  }

  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
  }

  onToggleFavorite(event: MouseEvent): void {
    this.toggleFavorite.emit(this.stock()!);
  }

  changeStockPrice() {
    this.stock()!.price += 5;
  }
}
