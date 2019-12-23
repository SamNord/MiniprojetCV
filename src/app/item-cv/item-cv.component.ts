import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Models/recette';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {
@Input() person : Personne[];
@Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectPersonne = () => {
    this.selectedPerson.emit(this.person);
  }

}
