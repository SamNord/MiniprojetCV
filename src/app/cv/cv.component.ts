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
      new Personne(1, 'titi', 'toto', 23, 'avatar.jpg', 777, 'dev junior'),
      new Personne(2, 'minet', 'mini', 30, 'femme_voilee2.png', 888, 'dev')
    ]
  }

  selectPersonne(personne)  {
this.selectedPersonne = personne;

  }

}
