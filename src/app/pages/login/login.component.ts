import { AppModule } from './../../app.module';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    phno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })
  constructor(private fb:FormBuilder,private db:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  // login

  login(){
    var phno=this.loginForm.value.phno
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
       const result=this.db.login(phno,password)
       .subscribe((result:any)=>{
        if(result){
          console.log(result)
          localStorage.setItem("phno",JSON.stringify(result.currentPhno))
          localStorage.setItem("userName",JSON.stringify(result.userName))
          localStorage.setItem("token",JSON.stringify(result.token))
          alert(result.message)
          this.router.navigateByUrl('')
        }
       },result=>{
        alert(result.error.message)
        
       })
       
    }else{
      alert("Invalid Form")
    }
  }

}
