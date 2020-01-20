import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recette } from '../Models/recette';
import { Cover } from '../Models/image';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {
  @Input() recette: Recette;
  @Input() cov: Cover;
  @Output() selectedRecipe = new EventEmitter();
  @Output() selectedCov = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selecRecipe = (recipe: Recette[]) => {
    this.selectedRecipe.emit(recipe);
  }

  // selectionImg = (cover) => {
  //   this.selectedCov.emit(cover);
  // }

}
