import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    BrowserAnimationsModule,
    
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
