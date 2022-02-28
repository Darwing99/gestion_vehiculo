import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListModeloService {

  url="https://137.184.224.36/project_evaluacion/Views/modelos/read_modelo.php";
  constructor(private http:HttpClient) { }

  getModelo():Observable<any>{
    const URL=this.url;
    return this.http.get(URL);
  }
}
