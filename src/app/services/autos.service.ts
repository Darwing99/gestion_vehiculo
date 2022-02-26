import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  uri='http://137.184.224.36/project_evaluacion/Views/';
  url=this.uri+'autos_propietario/read_autos_propietario.php/?nombre=';
 

  constructor(private http:HttpClient) { }

  getBuscarAutos(nombre_propietario:string ):Observable<any>{
    const URL=this.url+nombre_propietario;
    return this.http.get(URL);
  }
}
