import { Component, OnInit } from '@angular/core';
import { Recette } from '../Models/recette';
import { DataService } from '../data.service';
import { Cover } from '../Models/image';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  recipes: Recette[];
  covers: Cover[];
  selectedR: Recette[];
  selectedCover: Cover[];
 
  constructor(private data: DataService) { }

  ngOnInit() {
   

    this.data.getFiche().subscribe(
      (response) => {

        this.recipes = response;
      },
      (error) => {
        return this.data.recipes;
      }
    )


    this.data.getCover().subscribe(
      (response) => {

        this.covers = response;
      },
      (error) => {
        return 'error !';
      }
    )

  }

  selectRecipe(rec: Recette[]) {
    this.selectedR = rec;

  }

  selectCover(cov) {
    this.selectedCover = cov;
  }

}
