import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:any
  constructor(private router:Router) { }

  ngOnInit(): void {
   this.token=localStorage.getItem("token")
  }
  clickCategory(){
    if(this.token){
      this.router.navigateByUrl('category')
    }else{
      alert("Please Login...")
      this.router.navigateByUrl('login')
    }
  }

  logout(){
    if(this.token){
      localStorage.removeItem('phno')
    localStorage.removeItem('userName')
    localStorage.removeItem('token')


    alert("Logout Sucessfully...")
    this.router.navigateByUrl('login')
    }
    else{
      alert("Please Login.....")
    }
  }
}
