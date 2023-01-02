import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  categoryItems:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.categoryItems=this.service.addCategoryItem
  }

}
