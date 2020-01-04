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
import { AddFileComponent } from './add-file/add-file.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: AccueilComponent,
  },
  {
    path: 'liste', component: CVComponent,
  },
  {
    path: 'add', component: AddFileComponent,
  },
  {
    path: 'addImg', component: FormsAddComponent,
  }

]

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ItemCVComponent,
    DetailsCvComponent,
    ListCVComponent,
    FormsAddComponent,
    AddFileComponent,
    AccueilComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
