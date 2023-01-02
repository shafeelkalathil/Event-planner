import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  getBookingId:any
  categoryItems:any
  constructor(private param:ActivatedRoute) { }

  ngOnInit(): void {
   this.getBookingId=this.param.snapshot.paramMap.get('id')
    console.log(this.getBookingId)
  }

}
