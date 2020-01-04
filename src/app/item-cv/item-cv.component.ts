import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recette } from '../Models/recette';
import { Cover } from '../Models/image';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {
@Input() recipe : Recette[];
@Input() img : Cover[];

@Output() selectedRecette = new EventEmitter();
@Output() selectedImg = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecRecip = () => {
    this.selectedRecette.emit(this.recipe);
    this.selectedImg.emit(this.img);
  }

}
