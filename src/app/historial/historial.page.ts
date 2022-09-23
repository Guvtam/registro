import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {  Router } from '@angular/router';

export interface PeriodicElement {
  Curso: string;
  Seccion: string;
  Fecha: string;
  Hora: string;
}

const ELEMENT_DATA: PeriodicElement [] = [
 { Curso : 'Programación de Aplicaciones Móviles' , Seccion : '007V' , Fecha : '21-09-2021' , Hora : '19:11 a 20:30' },
 { Curso : 'Arquitectura' , Seccion : '007V' , Fecha : '21-09-2022' , Hora : '20:31 a 22:50' },
 { Curso : 'Calidad de Software' , Seccion : '005V' , Fecha : '24-09-2022' , Hora : '19:11 a 20:30' }
];


@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  displayedColumns: string[]=['Curso','Seccion','Fecha','Hora'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private router: Router,) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator; 
  }

  closeHistorial(){
    this.router.navigate(['/home'])
  }

  
  

}
