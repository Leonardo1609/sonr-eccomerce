import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductsModule } from '../products/products.module';
import { ClientsModule } from '../clients/clients.module';

@NgModule({
  declarations: [HomePageComponent, SliderComponent, WelcomeComponent],
  imports: [CommonModule, SharedModule, ProductsModule, ClientsModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
