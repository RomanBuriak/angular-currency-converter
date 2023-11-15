//get api monobank

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRate} from "../models/rate";

@Injectable({
  providedIn: 'root'
})

export class ProductsService{
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IRate[]>{
    return this.http.get<IRate[]>('https://api.monobank.ua/bank/currency')
  }

}
