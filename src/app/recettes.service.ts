import { Injectable } from '@angular/core';
import { Recipe } from './Models/gateau';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  gateaux = [
    {id: 1, title: "gâteau sans gluten", path: "gateau-au-yaourt-sans-gluten.jpeg", ingredients : "2 Pots de Maïzena, 1.5 pot sucre, 3 oeufs, 1 pot yaourt nature, 1 cc levure chimique, 1/2 pot d'huile", etapes:"etapes1, étape2, étapes 3.."},
    {id: 2, title: "gâteau sans gluten", path: "gateau_sansGluten_1.jpg", ingredients : "2 Pots de Maïzena, 1.5 pot sucre, 3 oeufs, 1 pot yaourt nature, 1 cc levure chimique, 1/2 pot d'huile", etapes:"etapes1, étape2, étapes 3.."}
  ]
  constructor() { }
}
