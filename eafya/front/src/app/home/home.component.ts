import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homes : Array<Object> = []
  name:string = '';
  constructor(private api:ApiService,private http:HttpClient) { }

  ngOnInit() {
    this.getHome()
  }
  getHome(){
    this.api.getHome().subscribe((data:Array<Object>)=>{
      this.homes = data;
      console.log(data)
    }, (err) =>{
      console.log(err)
    })
  }
  onKeyUp(event:any){
    this.name = event.target.value
  }
  getSearch(){
     this.http.get('/patient/search/?name=${this.name}').subscribe((data:{})=>{
       console.log(data)
     })
  }
}
