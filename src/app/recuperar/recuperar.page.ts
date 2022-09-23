import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {  Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimateChildOptions } from '@angular/animations';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {

  public errorMessages = {
    correo: [
      { type: 'required', message: 'Introduzca nombre' },
      { type: 'maxlength', message: 'El nomobre no puede tener mas de 15 caracteres'}
    ]
  };
  
  nombre: Text;
  correo: String;
  registerForm: FormGroup;
 

  constructor(public formBuilder: FormBuilder, public alerta: AlertController,private router: Router) {
    this.registerForm = this.formBuilder.group ({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)

      ])),      
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]))
    })
   }
  
   
   
   async alertaBasica(): Promise<void>{
    const miAlerta = await this.alerta.create({
      header: 'Recupera tu contraseña',
      message: 'Te hemos enviado un correo con tu contraseña',
      buttons: ['OK']
    });
   await miAlerta.present();
  }
  volver(){
    this.router.navigate(['/login'])
  }

}
