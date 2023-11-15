import {Component, Input} from "@angular/core";
//import {IProduct} from "../../models/product";
import {IRate} from "../../models/rate";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() rate1: IRate;
  @Input() rate2: IRate;
}



