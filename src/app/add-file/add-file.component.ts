import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
  id: any = undefined;
  title: any;
  formData: FormData;

  constructor(private api: DataService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    if (this.route.snapshot.params.id != undefined) {
      this.http.get('fiche/' + this.route.snapshot.params.id).subscribe((res: any) => {
        this.id = res.id;
        this.title = res.title;
      })
    }
    this.formData = new FormData();
  }

  /** */
  UploadFile = (files) => {
    if (files.length === 0)
      return
    this.formData.append('fiche/add', files[0]);
  }

  Add = () => {
    const fiche = { Title: this.title };
    for (let k in fiche) {
      console.log(k + " " + fiche[k]);
      this.formData.append(k, fiche[k]);
    }
    /******s'il n'existe pas , on l'ajoute******/
    if (this.id == undefined) {
      this.api.upload('fiche/add', this.formData).subscribe(event => {
        if (event.type == HttpEventType.Response) {
          const res = <any>event.body;
          if (!res.error) {
            alert(res.message + " " + res.ficheId);
            this.router.navigate(["/fiche"]);
          }
          else {
            alert(res.message);
          }
        }
      })
    }
    /***********sinon modifier****/
    // else {
    //   this.api.put('fiche/' + this.id, fiche).subscribe((res: any) => {
    //     alert(res.message);
    //     if (!res.error)
    //       this.router.navigate(['/fiche']);
    //   })
    // }

    /****on réinitialise****/
    this.formData = new FormData();
    // this.isConnect = true;
    // this.router.navigate(['/listeClient']);
  }

}
