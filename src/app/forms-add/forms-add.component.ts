import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms-add',
  templateUrl: './forms-add.component.html',
  styleUrls: ['./forms-add.component.css']
})
export class FormsAddComponent implements OnInit {
  id: any = undefined;
  title: any;
  formData: FormData;
  constructor(private api: DataService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    if (this.route.snapshot.params.id != undefined) {
      this.http.get('cover/' + this.route.snapshot.params.id).subscribe((res: any) => {
        this.id = res.id;
        this.title = res.titre;
      })
    }
    this.formData = new FormData();
  }

  UploadImg = (files) => {
    if (files.length === 0)
      return
    this.formData.append('cover/add', files[0]);
  }

  Add = () => {
    const cover = { Title: this.title };
    for (let k in cover) {
      console.log(k + " " + cover[k]);
      this.formData.append(k, cover[k]);
    }
    /******s'il n'existe pas , on l'ajoute******/
    if (this.id == undefined) {
      this.api.upload('cover/add', this.formData).subscribe(event => {
        if (event.type == HttpEventType.Response) {
          const res = <any>event.body;
          if (!res.error) {
            alert(res.message + " " + res.coverId);
            // this.router.navigate(["/cover"]);
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
