import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentProductsComponent } from './components/recent-products/recent-products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { ProductGaleryComponent } from './components/product-galery/product-galery.component';

@NgModule({
  declarations: [
    RecentProductsComponent,
    ProductCardComponent,
    ProductPageComponent,
    ProductCategoryPageComponent,
    ProductHomeComponent,
    ReviewSectionComponent,
    ProductGaleryComponent,
  ],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
  exports: [RecentProductsComponent],
})
export class ProductsModule {}
