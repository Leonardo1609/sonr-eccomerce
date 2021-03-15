import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../products.interface';
import { ProductsService } from '../../products.service';
import { setProductImagePath } from '../../helpers/helpers';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: [],
})
export class ProductPageComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    category: 0,
    oldPrice: 0,
    price: 0,
    productImage: 'product-1.jpg',
  };

  productsRelated: Product[] = [];

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
	  for( let i = 0; i <= 9; i++ ){
		  this.productsRelated.push( this.product )
	  }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.productService
        .getProductById(Number(id))
        .subscribe((product: Product[]) => {
          this.product = product[0];
          this.productService
            .getProductByCategory(this.product.category)
            .subscribe((products: Product[]) => {
              this.productsRelated = products;
            });
        });
    });
  }

  setProductImagePath = setProductImagePath;
}
