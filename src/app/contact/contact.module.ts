import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ContactPageComponent],
})

export class ContactModule {}
