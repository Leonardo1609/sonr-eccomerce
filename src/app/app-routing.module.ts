import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
