export class Recette {
id;
title;
composition;
etape;
texte;
path;

//composition --> tableau de string
//etape -- tableau de int
constructor(id = 0, title = '', composition = [], etape = "", path = '' ) 
{
this.id = id;
this.title = title;
this.composition = composition;
this.composition = composition;

this.path = path;

}
}