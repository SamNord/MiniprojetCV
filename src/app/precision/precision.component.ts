import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../Models/recette';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-precision',
  templateUrl: './precision.component.html',
  styleUrls: ['./precision.component.css']
})
export class PrecisionComponent implements OnInit {
  @Input() recipe : Recette[];
  constructor(private data : DataService, private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.data.getFicheById(params.id).subscribe(
          (recipe) => {
            console.log(recipe);
            this.recipe = recipe;
          }
        )
      }
    )
  }

}
