import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public errorMessages = {
    nombre: [
      { type: 'required', message: 'Introduzca nombre' },
      { type: 'maxlength', message: 'El nomobre no puede tener mas de 15 caracteres'}
    ]
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  nombre: String;
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder,private router: Router) {
    this.loginForm = this.formBuilder.group ({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),      
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]))
    })
   }
  ngOnInit() {}
  ingresar(){
    let Navigationextras : NavigationExtras={
      state:{ dato: this.nombre }
    }
    // API enrutador para llamar a otra página (y le agrego un parámetro)
    this.router.navigate(['/home'],Navigationextras)
  }

}
