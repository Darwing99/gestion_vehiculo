import { Component, OnInit } from '@angular/core';
import { AutosList } from 'src/app/models/auto_list';
import { ListAutosService } from 'src/app/services/list-autos.service';


@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  autos_list?:AutosList[];
  constructor(private _autos:ListAutosService) { 
    this.get_listAutos();

  }
 
  ngOnInit(): void {
  }
  get_listAutos(){
      this._autos.getAutos().subscribe((data:any)=>{
        this.autos_list=data.body;
      })
  }

}
