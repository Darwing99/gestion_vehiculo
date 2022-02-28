import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListTipoService {
  url="https://137.184.224.36/project_evaluacion/Views/tipos_auto/read_tipo_auto.php";
  constructor(private http:HttpClient) { }

  getTipo():Observable<any>{
    const URL=this.url;
    return this.http.get(URL);
  }
}
