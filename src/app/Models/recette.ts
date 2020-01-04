export class Recette {
id;
title;
urlFile;


//composition --> tableau de string
//etape -- tableau de int
constructor(id = 0, title = '', urlFile = '' ) 
{
this.id = id;
this.title = title;
this.urlFile = urlFile;

}
}