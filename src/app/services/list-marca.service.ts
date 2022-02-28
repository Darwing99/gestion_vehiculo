import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListMarcaService {
  url="https://137.184.224.36/project_evaluacion/Views/marcas/read_marca.php";
  constructor(private http:HttpClient) { }

  getMarca():Observable<any>{
    const URL=this.url;
    return this.http.get(URL);
  }
}
