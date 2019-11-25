import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {
@Input() personne : Personne;
@Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectPersonne = (selectedPerson) => {
this.selectedPerson.emit(selectedPerson);
  }

}
