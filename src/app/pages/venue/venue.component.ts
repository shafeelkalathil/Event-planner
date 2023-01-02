import { ServiceService } from 'src/app/services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  categoryItems:any
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.categoryItems=this.service.addCategoryItem
  }

}
