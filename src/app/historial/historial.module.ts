import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';
import { MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';

import { HistorialPage } from './historial.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [HistorialPage],
  exports: [MatTableModule, MatPaginatorModule]
})
export class HistorialPageModule {}
