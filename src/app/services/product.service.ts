import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    // this.http.get will return an Observable
    // Observable<Product[]> the Observable will become the type Product[]
    // if we specify data type, we have to specify it everywhere
    return this.http.get<Product[]>(apiUrl);
  }
}
