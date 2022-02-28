import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AutosList } from 'src/app/models/auto_list';
import { Marca } from 'src/app/models/marca_list';
import { Modelo } from 'src/app/models/modelo_list';
import { Propietario } from 'src/app/models/propietarios';
import { Tipo } from 'src/app/models/tipo_auto';
import { ListAutosService } from 'src/app/services/list-autos.service';
import { ListMarcaService } from 'src/app/services/list-marca.service';
import { ListModeloService } from 'src/app/services/list-modelo.service';
import { ListTipoService } from 'src/app/services/list-tipo.service';
import { PropietariosService } from 'src/app/services/propietarios.service';


@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  autos_list?:AutosList[];
  guardar=false;
  placa='';linea=''; chasis='';vin=''; cilindrada=''; color='';propietario='';
  modelo='';  marca=''; tipo='';
 
  data_propietario?:Propietario[];
  marca_list?:Marca[];
  tipo_list?:Tipo[];
  modelo_list?:Modelo[];

  constructor(private _autos:ListAutosService,
              private _modelos:ListModeloService,
              private _marcas:ListMarcaService,
              private _tipo:ListTipoService,
              private _propietario:PropietariosService
              ) { 

    this.get_listAutos();
    this.get_listPropietario();
    this.get_listMarca();
    this.get_listTipo();
    this.get_listModelo();

  }
  ngOnInit(): void {
  }
  validacion(){
    this.guardar=(this.placa.length==0 || this.chasis.length==0 || this.vin.length==0
      || this.cilindrada.length==0 || this.color.length==0 || this.propietario.length==0
      ||this.modelo.length==0 || this.marca.length==0 || this.tipo.length==0) ?true :false;
      return this.guardar;
  }
  get_listAutos(){
      this._autos.getAutos().subscribe((data:any)=>{
        this.autos_list=data.body;
      })
  }
  get_listMarca(){
    this._marcas.getMarca().subscribe((data:any)=>{
      this.marca_list=data.body;
    })
  }
  get_listTipo(){
    this._tipo.getTipo().subscribe((data:any)=>{
      this.tipo_list=data.body;
    })
  }
  get_listModelo(){
    this._modelos.getModelo().subscribe((data:any)=>{
      this.modelo_list=data.body;
    })
  }
  get_listPropietario(){
    this._propietario.getPropietarios().subscribe((data:any)=>{
      this.data_propietario=data.body;
    })
  }

  guardarAuto(){
   
    if(!this.validacion()){
      this._autos.postAutos({
        placa:this.placa,
        vin:this.vin,
        linea:this.linea,
        cilindrada:this.cilindrada,
        color:this.color,
        chasis:this.chasis,
        id_propietario:this.propietario,
        id_modelo:this.modelo,
        id_marca:this.marca,
        id_tipo:this.tipo
      }).subscribe();
      alert("Auto guardado!");
      delay(2000);
      this.get_listAutos();
    
    }else{
     
    }
   
  }
  deleteAuto(id?:number){
    this._autos.delAuto(id).subscribe();
    alert("auto eliminado");
    this.get_listAutos();
  }


}
