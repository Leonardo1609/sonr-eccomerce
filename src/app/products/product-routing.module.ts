import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductHomeComponent,
    children: [
      {
        path: 'category/:category',
        component: ProductCategoryPageComponent,
      },
      {
        path: 'category',
        redirectTo: 'category/1',
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: ProductPageComponent,
      },
      {
        path: '**',
        redirectTo: 'category/1',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
