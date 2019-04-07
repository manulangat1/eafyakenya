import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {PatientRegisterComponent} from './patient-register/patient-register.component'
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:PatientRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
