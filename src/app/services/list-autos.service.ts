import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAutosService {
url="https://137.184.224.36/project_evaluacion/Views/autos/read_autos.php";
urlPost="http://137.184.224.36/project_evaluacion/Views/autos_propietario/insert_auto_propietario.php";
  constructor(private http:HttpClient) { 

    
  }
getAutos():Observable<any>{
  const URL=this.url;
  return this.http.get(URL);
}
postAutos(lista:any):Observable<any>{
  const URL=this.urlPost;
  return this.http.post(URL,lista);
}
}
