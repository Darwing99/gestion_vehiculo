import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAutosService {
url="http://137.184.224.36/project_evaluacion/Views/autos/read_autos.php";
  constructor(private http:HttpClient) { 

    
  }
getAutos():Observable<any>{
  const URL=this.url;
  return this.http.get(URL);
}
}
