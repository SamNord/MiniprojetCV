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
selectedR : Recette;
  constructor(private data : DataService) { }

  ngOnInit() {
 this.recipes = this.data.recipes;
  }

  selectRecipe(rec)  {
this.selectedR = rec;

  }

}
