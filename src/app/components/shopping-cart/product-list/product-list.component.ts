import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishlist: number[] = [];

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
    // Display the products that we get from the API
    // subscribe to the Observerable to get the products
    this.loadProducts();
    this.loadWishList();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) =>{
      this.productList = products;
    });
  }

  loadWishList() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds;
    })
  }

}
