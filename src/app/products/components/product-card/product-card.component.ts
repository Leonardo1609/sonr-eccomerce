import { Component, Input, OnInit } from '@angular/core';
import { setProductImagePath } from '../../helpers/helpers';
import { Product } from '../../products.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: [],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}

  setProductImagePath = setProductImagePath;
}
