import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const httpOption ={
  headers: new HttpHeaders({
    // 'Content-Type': 'multipart/form-data'
    "Accept": "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  login(user){
    return this.http.post('/login/',JSON.stringify(user),httpOptions)
  }
  register(auser){
    return this.http.post('/register/',auser)
  }
  getPatient(){
    return this.http.get('/patients/')
  }
  createPatient(pat){
    return this.http.post('/createpatient/',pat)
  }
  getHome(){
    return this.http.get('/home/')
  }
  getHomeById(id){
    return this.http.get('/home/' + id + '/')
  }
  postHistory(histo){
    return this.http.post('/history/',histo)
  }
}
