import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {

      this.addProductToCart(product);

    })

  }

  addProductToCart(product: Product) {
    if(this.cartItems.length == 0) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    } else {
      for(let i in this.cartItems) {
        var isExist = false;
        if(this.cartItems[i].productId == product.id) {
          this.cartItems[i].qty++;
          isExist = true;
          break;
        }
      }
      if(!isExist) {
        this.cartItems.push({
          productId: product.id,
          productName: product.name,
          qty: 1,
          price: product.price
        })
      }
    }

    this.cartTotal = 0;

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}


