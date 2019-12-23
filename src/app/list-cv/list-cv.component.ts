import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recette } from '../Models/recette';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {
@Input() recette : Recette;
@Output() selectedRecipe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selecRecipe = (recipe) => {
this.selectedRecipe.emit(recipe);
  }

}
