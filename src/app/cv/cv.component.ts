import { Component, OnInit } from '@angular/core';
import { Recette } from '../Models/recette';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
recipes : Recette [];
selectedR : Recette[];
  constructor(private data : DataService) { }

  ngOnInit() {
    
    this.data.getFiche().subscribe(
      (response) => {
        // return this.http.get(this.link);
        this.recipes = response;
      },
      (error) => {
        return this.data.recipes;
      }
    ) 
 
  }

  selectRecipe(rec)  {
this.selectedR = rec;

  }

}
