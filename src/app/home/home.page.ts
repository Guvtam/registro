import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dato: any;
  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router,
    public ModalController: ModalController, 
    )
    {
    this.activeRoute.queryParamMap.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){//permite ver si la navegación tiene extras
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
      }
    });
  }

  async openModal (){
    const modal = await this.ModalController.create({
      component: ModalPage,
      cssClass: 'my-class-modal',
      componentProps: {
        Curso: 'Programación de Aplicaciones Móviles',
        Seccion: '007V', 
        Fecha : '21-09-2022',
        Hora: '19:11 a 20:30'       
      }
    });
    return await modal.present();
  }

  async openModal1 (){
    const modal = await this.ModalController.create({
      component: ModalPage,
      cssClass: 'my-class-modal',
      componentProps: {
        'Curso': 'Arquitectura',
        'Seccion': '007V', 
        'Fecha' : '21-09-2022',
        'Hora': '20:31 a 22:50',                 
      }
    });
    return await modal.present();
  }

  async openModal2 (){
    const modal = await this.ModalController.create({
      component: ModalPage,
      cssClass: 'my-class-modal',
      componentProps: {
        'Curso': 'Calidad de Software',
        'Seccion': '005V', 
        'Fecha' : '24-09-2022',
        'Hora': '19:11 a 20:30',                 
      }
    });
    return await modal.present();
  }

  ingresarHistorial(){
    this.router.navigate(['/historial'])
  }
}
