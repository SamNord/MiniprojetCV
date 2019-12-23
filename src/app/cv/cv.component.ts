import { Component, OnInit } from '@angular/core';
import { Recette } from '../Models/recette';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
personnes : Recette [];
selectedPersonne : Recette;
  constructor(private data : DataService) { }

  ngOnInit() {
 this.personnes = this.data.personnes;
  }

  selectPersonne(rec)  {
this.selectedPersonne = rec;

  }

}
