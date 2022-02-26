import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosPropietarioComponent } from './components/autos-propietario/autos-propietario.component';
import { AutosComponent } from './components/autos/autos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'autos',component:AutosComponent,},
  {path:'autos_propietarios',component:AutosPropietarioComponent,},
  {path:'propietarios',component:DashboardComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
