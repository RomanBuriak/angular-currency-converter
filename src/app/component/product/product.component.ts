import {Component, Input} from "@angular/core";
import {IRate} from "../../models/rate";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() rate: IRate
}


