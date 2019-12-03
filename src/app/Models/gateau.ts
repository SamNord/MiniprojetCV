export class Recipe {
    id;
    title;
    ingredients;
    etapes;
    path;
    cin;
    astuces;
    
    constructor(id = 0, title = '', ingredients = [], etapes = [], path = '', cin = 1, astuces = '' ) 
    {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.etapes = etapes;
    this.path = path;
    this.cin = cin;
    this.astuces = astuces;
    }
    }