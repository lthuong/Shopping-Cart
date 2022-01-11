import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  getCartItems() : Observable<CartItem[]> {
    // TODO: mapping the obtained result to our CartItem props. ( pipe() and map() )
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result : any[]) => {
        let cartItems: CartItem[] = [];

        for(let item of result) {
          let itemExists = false;

          for(let i in cartItems) {
            if(cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              itemExists = true;
              break;
            }
          }
          if(!itemExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }
        
        return cartItems;
      })
    );
  }

  addProductToCart(product: Product) : Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
