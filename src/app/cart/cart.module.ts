import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [CartPageComponent],
})
export class CartModule {}
