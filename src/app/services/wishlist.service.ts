import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { productsUrl, wishlistUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  // don't have a data type for these function for simplicity => not really a good idea

  addToWishlist(productId) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }

  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result : any[]) => {
        let productIds = [];

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }
}
