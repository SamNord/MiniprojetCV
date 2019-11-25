import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
@Input() personne : Personne;
  constructor() { }

  ngOnInit() {
  }

}
