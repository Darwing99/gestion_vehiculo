import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Propietario } from '../models/propietarios';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {
data_propietario?:Propietario[];

uri='https://137.184.224.36/project_evaluacion/Views/';
url=this.uri+'propietarios/read_propietarios.php/';
urlpost='https://137.184.224.36/project_evaluacion/Views/propietarios/create_propietarios.php/';
urldelete="http://137.184.224.36/project_evaluacion/Views/propietarios/delete_propietarios.php?id="
  constructor(private http:HttpClient) {


   }
   
  
  
   getPropietarios():Observable<any>{
    
     const URL=this.url;
     return this.http.get(URL);
   }

   setPropietarios(lista:any):Observable<any>{
     const URL=this.urlpost;
    
     return this.http.post(URL,lista);
   }
   deletePropietarios(id?:number):Observable<any>{
    const URL=this.urldelete+id;
    return this.http.delete(URL);
  }
}
