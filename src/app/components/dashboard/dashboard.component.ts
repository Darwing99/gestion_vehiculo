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
  propietario_seleccionado="jk";
  listData:any[]=[];

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
  
   
    this.loading=false;
  } 
 
}
