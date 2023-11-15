import { Component } from '@angular/core';
//import {IRate} from "./models/rate";
import {IProduct} from "./models/product";
import {products as data} from "./data/products";

//import {rates as data} from "./data/rates"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-currency-converter'
  products: IProduct[] = data
}
