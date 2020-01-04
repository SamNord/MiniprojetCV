export class Cover {
    id;
    path;
    titre;


    //composition --> tableau de string
    //etape -- tableau de int
    constructor(id = 0, path = '', titre = '') {
        this.id = id;
        this.path = path;
        this.titre = titre;
    }
}