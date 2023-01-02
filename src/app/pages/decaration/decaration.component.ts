import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decaration',
  templateUrl: './decaration.component.html',
  styleUrls: ['./decaration.component.css']
})
export class DecarationComponent implements OnInit {
  categoryItems:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.categoryItems=this.service.addCategoryItem
  }

}
