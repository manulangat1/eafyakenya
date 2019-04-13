import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient,HttpParams} from '@angular/common/http'
import {FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any= 'Show';
  homes : Array<Object> = []
  search:string;
  pls : Array<Object> = []
  found:boolean
  // yourForm : FormGroup;
  // selectedFile = null;
  // onFileSelected(event){
  //   this.selectedFile = event.target.files[0]
  // }
  constructor(private api:ApiService,private http:HttpClient,private router:Router) {
    // this.yourForm = this.fb.group({
    //   name: [''],
    //   age: [''],
    //   pic: [''],
    //   email: ['']
    // });
  }

  ngOnInit() {
    this.getHome()
  }
  toggle(){
    this.show = !this.show
    if(this.show){
      this.buttonName = "Hide"
    }
     else{
      this.buttonName = "show"
     }
  }
  goToUrl(){
    this.router.navigate(['/history/add'])
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
    this.search = event.target.value
    this.found = false;
  }
  getSearch(){
     this.http.get('/ps/', { params: new HttpParams().set('search',this.search) }).subscribe((data:Array<Object>)=>{
       console.log(data)
       this.pls = data
     })
  }
  // createPat(patData){
  //   const fd = new FormData()
  //   fd.append('name',this.yourForm.get('name').value)
  //   fd.append('age',this.yourForm.get('age').value)
  //   fd.append('email',this.yourForm.get('email').value)
  //   fd.append('pic',this.selectedFile,this.selectedFile.name)
  //   // this.patDetails['pic'] = "this.selectedFile,this.selectedFile.name"
  //   this.api.createPatient(fd).subscribe((data:{})=>{
  //     console.log("successfulll...")
  //   }, (err)=>{
  //     console.log(err)
  //   })
  // }
}
