import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {PatientRegisterComponent} from './patient-register/patient-register.component'
import {HomeComponent} from './home/home.component'
import {HomedetailsComponent} from './homedetails/homedetails.component'
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:PatientRegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"home/home/det/:id",component:HomedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
