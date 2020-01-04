import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../Models/recette';
import { Cover } from '../Models/image';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
@Input() recipe : Recette[];
@Input() image : Cover[];
  constructor() { }

  ngOnInit() {
    console.log(this.recipe);
    console.log(this.image);
  }

}
