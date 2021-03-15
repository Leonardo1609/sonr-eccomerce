import { Component, OnInit } from '@angular/core';
import { Product } from '../../products.interface';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styles: [],
})
export class RecentProductsComponent implements OnInit {
  recentProducts: Product[] = [];
  constructor(private productService: ProductsService) {
    this.productService.getRecentProducts().subscribe((products) => {
      this.recentProducts = products;
    });
  }

  ngOnInit(): void {}
}
