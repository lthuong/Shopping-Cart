import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Display the products that we get from the API
    // subscribe to the Observerable to get the products
    this.productService.getProducts().subscribe((products) =>{
      this.productList = products;
    });
  }

}
