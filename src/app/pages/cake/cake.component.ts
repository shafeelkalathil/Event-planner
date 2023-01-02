import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  categoryItems:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.categoryItems=this.service.addCategoryItem
  }

}
