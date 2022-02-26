import { Component, OnInit } from '@angular/core';
import { Autos } from 'src/app/models/auto_detalle';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-autos-propietario',
  templateUrl: './autos-propietario.component.html',
  styleUrls: ['./autos-propietario.component.css']
})
export class AutosPropietarioComponent implements OnInit {
nombre_propietario='';
autos_propietario?:Autos[];
  constructor(private _detalle_autos: AutosService) {
    this.getAutos();
   }

  ngOnInit(): void {
  }

  getAutos(){
 
   
      this._detalle_autos.getBuscarAutos(this.nombre_propietario).subscribe((data:any)=>{
      this.autos_propietario=data.body;
      console.log(this.autos_propietario);
    });
    

  }

}
