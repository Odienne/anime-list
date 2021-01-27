import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, NgForm, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

    myForm: FormGroup;

    User: any = {};
    alreadyUser = JSON.parse(localStorage.getItem('user'));

    constructor(
        private formBuilder: FormBuilder,
        public alertController: AlertController,
        private router: Router,
        private _httpClient: HttpClient
    ) {
        if (this.alreadyUser) {
            this.router.navigate(['tabs']);
        }
    }

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            username: ['', Validators.required],
            pwd: ['', Validators.required],
        });
    }

    // Détecte le submit de notre formulaire
    onSubmit(f: NgForm): void {
        if ((f.value.username === '') || (f.value.pwd === '')) {
            this.presentAlert('Formulaire incomplet', 'Veuillez remplir tous les champs');
        } else {
            this._httpClient.get(`http://localhost:4444/api/user/${f.value.username}/${f.value.pwd}`)
                .subscribe(
                    (user) => {
                        this.User = user;
                        localStorage.setItem('userId', this.User.userId);
                        localStorage.setItem('user', JSON.stringify(this.User));
                        this.router.navigate(['tabs']);
                    },
                    (err: any) => {
                        this.presentAlert('Connexion impossible', 'Informations de connexion erronées');
                    }
                );
        }
    }

    async presentAlert(header: string, message: string): Promise<void> {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: header,
            message: message,
            buttons: ['OK']
        });

        await alert.present();
    }
}
