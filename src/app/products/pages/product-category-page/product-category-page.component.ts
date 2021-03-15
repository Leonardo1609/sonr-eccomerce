import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../products.interface';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-category-page',
  templateUrl: './product-category-page.component.html',
  styles: [],
})
export class ProductCategoryPageComponent implements OnInit {
  productsPerCategory: Product[] = [];
  productsToShow: Product[] = [];
  numberPages: number[] = [];
  firstOfPage: number = 1;
  lastOfPage: number = 9;
  actualPage: number = 1;
  totalPages: number = 0;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ category }) => {
      this.productService
        .getProductByCategory(Number(category))
        .subscribe((products: Product[]) => {
          this.productsPerCategory = products;
          this.totalPages = Math.ceil(this.productsPerCategory.length / 8);
          this.numberPages = Array(this.totalPages)
            .fill(1)
            .map((x, i: number) => i + 1);
          this.productsPerPage(this.actualPage);
        });
    });
  }

  productsPerPage(page: number) {
    if (page <= 0 || page > this.totalPages) return;

    this.actualPage = page;
    const firstProduct = 9 * (this.actualPage - 1);
    this.firstOfPage = firstProduct + 1;

    let lastProduct = 9 * (this.actualPage - 1) + 9;

    lastProduct =
      this.productsPerCategory.length > lastProduct
        ? lastProduct
        : this.productsPerCategory.length;

    this.lastOfPage = lastProduct;

    this.productsToShow = this.productsPerCategory.slice(
      firstProduct,
      lastProduct
    );
  }
}
