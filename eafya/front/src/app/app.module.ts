import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClientXsrfModule,HTTP_INTERCEPTORS,HttpXsrfTokenExtractor} from '@angular/common/http'
import  {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpXSRFInterceptor} from './http-xsrfinterceptor'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonsDirective } from './buttons.directive';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { HomeComponent } from './home/home.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { HistoryaddComponent } from './historyadd/historyadd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonsDirective,
    PatientRegisterComponent,
    HomeComponent,
    HomedetailsComponent,
    HistoryaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName :'csrftoken',
      headerName : 'X-CSRFTOKEN'
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,useClass:HttpXSRFInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
