import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getpropietarios(){
    this.router.navigate(['/propietarios']);
  }
  navegarAutos(){
      this.router.navigate(['/autos_propietarios']);
  }
  autos(){
    this.router.navigate(['/autos']);
}
}
