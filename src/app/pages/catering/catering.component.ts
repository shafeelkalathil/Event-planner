import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {
  categoryItems:any
  getBookingId:any
  bookData:any
  baseUrl='http://localhost:3000/uploads'
  constructor(private service:ServiceService,private router:Router,private param:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getCategoryItems().subscribe((data:any)=>{
      this.categoryItems=data.result
      console.log( this.categoryItems)
    })
  }
 
  
}
