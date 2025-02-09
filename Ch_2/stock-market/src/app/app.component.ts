import { Component } from '@angular/core';
import { StockItemComponent } from "./stock/stock-item/stock-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [StockItemComponent]
})
export class AppComponent {
  title = 'stock-market';
}
