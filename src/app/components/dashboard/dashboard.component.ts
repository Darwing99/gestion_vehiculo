import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietarios';

import { PropietariosService } from 'src/app/services/propietarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data_propietario?:Propietario[];
  nombre='';
  email='';
  telefono='';
  apellido='';
  direccion='';
  identificacion='';
  fecha_nacimiento='';


  loading=false;
  constructor(private _propietarios: PropietariosService,) {
   
    this.obtenerData();
   }

  ngOnInit(): void {
  }
  obtenerData(){
    
    this.loading=true;
    this._propietarios.getPropietarios().subscribe((data:any)=>{
      
      this.loading=false;
      this.data_propietario=(data.body);
 
    });
  
   
  
  } 
  guardarData(){
      this._propietarios.setPropietarios( {
        nombre:this.nombre,
        apellido:this.apellido,
        identificacion:this.identificacion,
        direccion:this.direccion,
        fecha_nacimiento:this.fecha_nacimiento,
        telefono:this.telefono,
        email:this.email
      
      }).subscribe(((data:any)=>{
        alert("Propietario guardado"+data.placa);
      }));
  }
 
}
