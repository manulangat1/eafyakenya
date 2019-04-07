import { Component, OnInit,Input } from '@angular/core';
import {ApiService} from '../api.service'
import {FormBuilder,FormGroup} from '@angular/forms'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  yourForm : FormGroup;
  selectedFile = null;
  onFileSelected(event){
    this.selectedFile = event.target.files[0]
  }
  // @Input() patDetails = {name:"",age:0,email:""}
  constructor(private fb:FormBuilder,private api:ApiService,private route:ActivatedRoute, private router:Router) {
    this.yourForm = this.fb.group({
      name: [''],
      age: [''],
      pic: [''],
      email: ['']
    });
   }
  ngOnInit() {
  }
  createPat(patData){
    const fd = new FormData()
    fd.append('name',this.yourForm.get('name').value)
    fd.append('age',this.yourForm.get('age').value)
    fd.append('email',this.yourForm.get('email').value)
    fd.append('pic',this.selectedFile,this.selectedFile.name)
    // this.patDetails['pic'] = "this.selectedFile,this.selectedFile.name"
    this.api.createPatient(fd).subscribe((data:{})=>{
      console.log("successfulll...")
    }, (err)=>{
      console.log(err)
    })
  }
}
