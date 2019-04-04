import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  login(user){
    return this.http.post('/login/',user)
  }
  register(auser){
    return this.http.post('/register/',JSON.stringify(auser))
  }
  getPatient(){
    return this.http.get('/patients/')
  }
  createPatient(pat){
    return this.http.post('/createpatient/',pat)
  }

}
