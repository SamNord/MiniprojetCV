import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recette } from '../Models/recette';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {
@Input() recipe : Recette[];

@Output() selectedRecette = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecRecip = () => {
    this.selectedRecette.emit(this.recipe);
  }

}
