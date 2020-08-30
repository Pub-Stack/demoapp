import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';






@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductPageComponent,
    MainLayoutComponent,
    CartPageComponent,
    PageNotFoundComponent,
    ProductComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
