import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/products/products.interface';
import { ProductsService } from 'src/app/products/products.service';
import { setProductImagePath } from '../../../products/helpers/helpers';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [],
})
export class CartPageComponent implements OnInit {
  productsCart: CartProduct[] = [];
  subTotalPrice: number = 0;
  shippingCost: number = 0;
  totalPrice: number = 0;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProductsOfCart()
      .subscribe((products: CartProduct[]) => {
        this.productsCart = products;
        this.subTotalPrice = this.productsCart.reduce(
          this.reducerTotalPrice,
          0
        );
        this.totalPrice = this.subTotalPrice + this.shippingCost;
      });
  }
  setProductImagePath = setProductImagePath;

  reducerTotalPrice(acc: number, cur: CartProduct): number {
    return acc + cur.price;
  }
}
