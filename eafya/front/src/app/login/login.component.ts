import { Component, OnInit,Input } from '@angular/core';
import {ApiService} from '../api.service'
import {Router,ActivatedRoute} from '@angular/router'
window.onload = function(){
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
  });

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() regDetails = {username:"",email:"",password:""}
  @Input() logDetails = {username:"",password:""}
  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
  }
  logsIn(logData){
    this.api.login(this.logDetails).subscribe((data:{})=>{
      console.log("log in successfull")
    }, (err)=>{
      console.log(err)
    })
  }
  registers(regData){
    this.api.register(this.regDetails).subscribe((data:{})=>{
      console.log("registered successfully")
    })
  }
}
