import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  // Get the products from the API
  getProducts() : Observable<Product[]> {
    // this.http.get will return an Observable => we always have to specify the data type that we want to get
    // Observable<Product[]> the Observable will become the type Product[]
    // if we specify data type, we have to specify it everywhere
    return this.http.get<Product[]>(productsUrl);
  }
}
