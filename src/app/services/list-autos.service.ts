import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAutosService {
url="https://137.184.224.36/project_evaluacion/Views/autos/read_autos.php";
urlPost="https://137.184.224.36/project_evaluacion/Views/autos_propietario/insert_auto_propietario.php";
urlDel="http://137.184.224.36//project_evaluacion/Views/autos/delete_autos.php/?id="; 
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
delAuto(id?:number):Observable<any>{
  const URL=this.urlDel+id;
  return this.http.delete(URL);
}
}
