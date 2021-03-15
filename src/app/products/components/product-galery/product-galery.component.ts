import { Component, Input, OnInit } from '@angular/core';
import { setProductImagePath } from '../../helpers/helpers';
import { Product } from '../../products.interface';

@Component({
  selector: 'app-product-galery',
  templateUrl: './product-galery.component.html',
  styles: [],
})
export class ProductGaleryComponent implements OnInit {
  @Input() productsRelated: Product[] = [];
  @Input() product!: Product;

  // Por un motivo que desconozco, los arrays no trabajan bien iterando los productos con un ngFor, por lo que crearé un array con la longitud de números correspondiente a la cantidad de elementos que quiero mostrar en el slider
  oneToTen: number[] = [...Array(10).keys()];

  constructor() {}

  ngOnInit(): void {}

  setProductImagePath = setProductImagePath;
}
