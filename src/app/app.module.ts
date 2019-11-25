import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVComponent } from './cv/cv.component';
import { ItemCVComponent } from './item-cv/item-cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { ListCVComponent } from './list-cv/list-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ItemCVComponent,
    DetailsCvComponent,
    ListCVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
