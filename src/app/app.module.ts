import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVComponent } from './cv/cv.component';
import { ItemCVComponent } from './item-cv/item-cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { ListCVComponent } from './list-cv/list-cv.component';
import { FormsAddComponent } from './forms-add/forms-add.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { PrecisionComponent } from './precision/precision.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path : '', component : AppComponent},
  {path : 'fiche/:id', component : PrecisionComponent}
 
];


@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ItemCVComponent,
    DetailsCvComponent,
    ListCVComponent,
    FormsAddComponent,
    PrecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
