import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {ApiService} from '../api.service'
@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {
  id = this.route.snapshot.params['id']
  p: any ={}
  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.api.getHomeById(this.id).subscribe((data:{})=>{
      this.p = data;
      console.log(data)
    })
  }

}
