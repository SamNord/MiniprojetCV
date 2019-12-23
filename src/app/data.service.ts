import { Injectable } from '@angular/core';
import { Recette } from './Models/recette';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  recipes = [
    new Recette(1, 'Fondant au chocolat', ["150 g de chocolat pâtissier", "200 g de farine","75 g de beurre demi-sel", "25 cl de crème liquide entière", "100 g de sucre en poudre"], "Préchauffez le four à 180°C (thermostat 6). Faites fondre au bain-marie le chocolat et le beurre tous deux coupés en petits morceaux. Quand la préparation est bien liquide, incorporez la crème et le sucre. Ajoutez la farine petit à petit en la tamisant, pour éviter les grumeaux. Beurrez et farinez votre moule, (j'ai pris un moule de 23 cm). Versez votre mélange dans le moule et hop, au four. La cuisson varie entre 15 et 30 min selon la consistance désirée (fondant ou sec). Laissez un peu refroidir pour démouler. Vous pouvez saupoudrer de sucre glace pour une présentation sympa.", "assets/images/gateau_sansGluten_1.jpg"),
    new Recette(2, 'r1', ["ing1", "ing2"], "Haec subinde Constantius audiens et quaedam referente Thalassio doctus, quem eum odisse iam conpererat lege communi, scribens ad Caesarem blandius adiumenta paulatim illi subtraxit, sollicitari se simulans ne, uti est militare otium fere tumultuosum, in eius perniciem conspiraret, solisque scholis iussit esse contentum palatinis et protectorum cum Scutariis et Gentilibus, et mandabat Domitiano, ex comite largitionum, praefecto ut cum in Syriam venerit, Gallum, quem crebro acciverat, ad Italiam properare blande hortaretur et verecunde.", "assets/images/gateau_yaourt.jpeg")

  ]

  constructor() { }
}
