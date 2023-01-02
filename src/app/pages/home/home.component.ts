
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }
  category:any
  token:any
  data:any
 

  baseUrl='http://localhost:3000/uploads'
  ngOnInit(): void {
    
   
   this.token=localStorage.getItem("token")
   this.service.getCategory().subscribe((data:any)=>{
    this.category = data.result;
    // console.log(this.category)
    
})
  }
  
   
  bookNow(){
    
    if(this.token){
      this.router.navigateByUrl('category')
    }else{
      alert("Please Login..")
      this.router.navigateByUrl('login')
    }
  }

  click(){
   alert("Please Login...")
     this.router.navigateByUrl('login')
  }

}
