export class Personne {
id;
nom;
prenom;
age;
path;
cin;
job;

constructor(id = 0, nom = '', prenom = '', age = 0, path = '', cin = 1, job = '' ) 
{
this.id = id;
this.nom = nom;
this.prenom = prenom;
this.age = age;
this.path = path;
this.cin = cin;
this.job = job;
}
}