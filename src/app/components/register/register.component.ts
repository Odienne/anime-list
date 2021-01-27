import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    public alertController : AlertController,
    public router : Router,
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }

  onSubmit(f: NgForm): void {
    if ((f.value.username === '') || (f.value.pwd === '')) {
      this.presentAlert('Formulaire incomplet', 'Veuillez remplir tous les champs');
    } else {
      this._httpClient.get("http://localhost:4444/api/user/" + f.value.username)
      .subscribe(
        (user : Object) => {
          this.presentAlert('Création de compte impossible', "Nom d'utilisateur déjà pris");
        },
        (err : any) => {
          this._httpClient.post("http://localhost:4444/api/user", f.value)
          .subscribe(res => {
            console.log("Réponse", res);            
          })
          this.router.navigate(['/']);
        }
      )
    } 
  }

  async presentAlert(header : string, message : string) : Promise<void> {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
