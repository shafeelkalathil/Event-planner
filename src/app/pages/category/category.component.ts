import { Router } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }
  category:any
  categoryItems:any
  baseUrl='http://localhost:3000/uploads'
  ngOnInit(): void {
    this.category=this.service.addCategory
    this.service.getCategoryItems().subscribe((data:any)=>{
      this.categoryItems=data.result
      console.log( this.categoryItems)
    })
    this.service.getCategory().subscribe((data:any)=>{
      this.category=data.result
    })
    
  }
  
}
