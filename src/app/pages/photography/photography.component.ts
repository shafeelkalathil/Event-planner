import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  categoryItems:any
  constructor(private service:ServiceService) { }
  
  ngOnInit(): void {
    this.categoryItems=this.service.addCategoryItem
  }

}
