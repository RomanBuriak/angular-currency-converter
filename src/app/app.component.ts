import {Component, OnInit} from '@angular/core';
import {IRate} from "./models/rate";
//import {IProduct} from "./models/product";
//import {products as data} from "./data/products";
import {rates as data} from "./data/rates"
import {ProductsService} from "./services/products.service";
import {products} from "./data/products";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-currency-converter'

  rates: IRate[] = []

  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
    this.productsService.getAll().subscribe(rates => {
      this.rates = rates
    })
  }
}
