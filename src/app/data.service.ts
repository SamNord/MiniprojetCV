import { Injectable } from '@angular/core';
import { Recette } from './Models/recette';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // recipes = [
  //   new Recette(1, 'Fondant au chocolat', ["150 g de chocolat pâtissier", "200 g de farine","75 g de beurre demi-sel", "25 cl de crème liquide entière", "100 g de sucre en poudre"], "Préchauffez le four à 180°C (thermostat 6). Faites fondre au bain-marie le chocolat et le beurre tous deux coupés en petits morceaux. Quand la préparation est bien liquide, incorporez la crème et le sucre. Ajoutez la farine petit à petit en la tamisant, pour éviter les grumeaux. Beurrez et farinez votre moule, (j'ai pris un moule de 23 cm). Versez votre mélange dans le moule et hop, au four. La cuisson varie entre 15 et 30 min selon la consistance désirée (fondant ou sec). Laissez un peu refroidir pour démouler. Vous pouvez saupoudrer de sucre glace pour une présentation sympa.", "assets/images/gateau_sansGluten_1.jpg"),
  //   new Recette(2, 'gâteau au yaourt', ["1 pot Yaourt nature", "2 pots de sucre", "1 sachet de sucre vanillé", "3 pots de farine", "1/2 pot d'huile d'olive", "3 Oeufs", "1/2 sachet de levure chimique", "pincée de sel"], "Allumer le four thermostat 5-6 (180°C). Beurrer un moule rond. Verser le yaourt dans un saladier et ajouter dans l'ordre en mélangeant bien avec une cuillère en bois : les sucres, les œufs un à un, la farine, la levure, le sel, l'huile. Pour finir,mettre la préparation dans le moule beurré et faire cuire 35 minutes. Laisser refroidir et démouler.", "assets/images/gateau_yaourt.jpeg"),
  //   new Recette(3, 'tarte aux pommes', ["1 rouleau de pâte sablée", "3 pommes Golden", "3 oeufs ", "3 c à s de sucre ", "20cL de crème liquide", "1 pincée de cannelle ", "1 sachet de sucre vanillé"], "Déroulez, étalez et piquez la pâte dans un moule à tarte. Pelez, videz et coupez en fines tranches les pommes. Posez-les sur la pâte en rosace. Dans un saladier, battez les œufs avec le sucre, puis ajoutez la crème et la cannelle. Versez le mélange sur les pommes. Pour finir, mettez au four à 210°C (thermostat 7) pour 40 minutes environ. Vers la fin de la cuisson, répartissez sur la tarte le sucre vanillé et remettez au four pour caramélisé.", "assets/images/tarte_pommes.jpg"),
  //   new Recette(4, 'Crêpes', ["250g de farine", "4 oeufs ", "2 c à s de sucre ", "1/2L de lait", "50g de beurre fondu", "1 pincée de sel"], "Mettez la farine dans un saladier avec le sel et le sucre. Faites un puits au milieu et versez-y les œufs. Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien. Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner. Laissez cuire environ une minute de ce côté et la crêpe est prête. Pour finir, répétez jusqu'à épuisement de la pâte.", "assets/images/crepes.jpg"),
  //   new Recette(5, 'Cookies', ["150g de farine", "1 oeuf ", "85g de sucre ", "1 sachet de suvre vanillé", "85 de beurre doux", "100g de pépites de chocolat", "1 c à c de levure chimique ", "1 pincée de sel"], "Laissez ramollir le beurre à température ambiante. Dans un saladier, malaxez-le avec le sucre. Ajoutez l'oeuf et éventuellement le sucre vanillé. Versez progressivement la farine, la levure chimique, le sel et les pépites de chocolat. Mélangez bien. Beurrez une plaque allant au four ou recouvrez-la d'une plaque de silicone. À l'aide de deux cuillères à soupe ou simplement avec les mains, formez des noix de pâte en les espaçant car elles s'étaleront à la cuisson. Pour finir, faites cuire 8 à 10 minutes à 180°C soit thermostat 6. Il faut les sortir dès que les contours commencent à brunir.", "assets/images/cookies.jpg")
  // ]

  /*******************nouveau code avec observable et api********* */ 
  recipes = [
    new Recette(1, 'Fondant au chocolat', "assets/images/gateau_sansGluten_1.jpg"),
    new Recette(2, 'gâteau au yaourt', "assets/images/gateau_yaourt.jpeg"),
    new Recette(3, 'tarte aux pommes', "assets/images/tarte_pommes.jpg"),
    new Recette(4, 'Crêpes', "assets/images/crepes.jpg"),
    new Recette(5, 'Cookies', "assets/images/cookies.jpg")
  ]

  urlBase = "http://localhost:52268/fiche";
  obsEnvoi = new Subject<any>();
  constructor(private http : HttpClient) { }


  getFiche(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.urlBase);
  }

  getFicheById(id : any): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.urlBase + '/' + id);
  }
}