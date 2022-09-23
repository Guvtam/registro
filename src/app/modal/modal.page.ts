import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() Curso: string;
  @Input() Seccion: string;
  @Input() Fecha: string;
  @Input() Hora: string;
  

  constructor(
    public ModalController: ModalController,
  ) { }

  ngOnInit() {
  }
  closeModal(){
    this.ModalController.dismiss();
  }



}
