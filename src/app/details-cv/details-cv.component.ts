import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../Models/recette';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
@Input() recipe : Recette[];
  constructor(private activateRoute : ActivatedRoute,
     private data : DataService,
     private route : Router) { }

  ngOnInit() {

  }

  seeDetail = (id) => {
    console.log(id);
    const link = ['fiche', id ];
    this.route.navigate(link);
  }

}
