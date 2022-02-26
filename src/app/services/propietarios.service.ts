import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Propietario } from '../models/propietarios';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {
data_propietario?:Propietario[];

uri='http://137.184.224.36/project_evaluacion/Views/';
url=this.uri+'propietarios/read_propietarios.php/';
urlpost=this.uri+'propietarios/create_propietarios.php/';

  constructor(private http:HttpClient) {


   }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
      
    } ),
   
  }
  
   getPropietarios():Observable<any>{
    
     const URL=this.url;
     return this.http.get(URL,this.httpOptions);
   }

   setPropietarios(){
     const URL=this.urlpost;
     return this.http.post(URL,this.data_propietario);
   }
}
