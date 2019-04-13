import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
@Component({
  selector: 'app-historyadd',
  templateUrl: './historyadd.component.html',
  styleUrls: ['./historyadd.component.css']
})
export class HistoryaddComponent implements OnInit {
  HistDetails ={text:"",patient:0}
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  postHistory(histData){
    this.api.postHistory(this.HistDetails).subscribe((data:{})=>{
      console.log("added successfully")
    })
  }

}
