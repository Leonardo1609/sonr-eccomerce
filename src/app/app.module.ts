import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ContactModule,
    SharedModule,
    BrowserModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
