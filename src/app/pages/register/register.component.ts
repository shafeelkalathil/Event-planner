import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   registerForm=this.fb.group({
    userName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
   })

  constructor(private fb:FormBuilder,private db:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  
  // register
  register(){
    let userName=this.registerForm.value.userName
    let phno=this.registerForm.value.phno
    let password=this.registerForm.value.password
    

    if(this.registerForm.valid){
    const result=this.db.register(userName,phno,password)
    .subscribe((result:any)=>{
      if(result){
         alert(result.message)
         this.router.navigateByUrl('login')
      }
    },result=>{
      alert(result.error.message)
      
    })
     
    }else{
      alert('Invalid Form')
    }
   
  }

}
