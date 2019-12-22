import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
personnes : Personne [];
selectedPersonne : Personne;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'nana', 'lor', 23, 'avatar1.png', 777, 'développeuse web'),
      new Personne(2, 'lola', 'tor', 30, 'avatar2.jpeg', 888, 'assistante manager'),
      new Personne(3, 'alexis', 'dupont', 40, 'avatar3.jpg', 555, 'serveur'),
      new Personne(3, 'charles', 'devot', 37, 'man-avatar.jpg', 333, 'électricien')
    ]
  }

  selectPersonne(personne)  {
this.selectedPersonne = personne;

  }

}
