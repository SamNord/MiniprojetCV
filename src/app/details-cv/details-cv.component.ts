import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../Models/recette';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
@Input() recipe : Recette;
  constructor() { }

  ngOnInit() {
  }

}
