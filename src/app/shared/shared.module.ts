import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SecondaryHeaderComponent } from './secondary-header/secondary-header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    MainHeaderComponent,
    FooterComponent,
    SecondaryHeaderComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MainHeaderComponent,
    FooterComponent,
    SecondaryHeaderComponent,
    NavigationComponent,
  ],
})
export class SharedModule {}
