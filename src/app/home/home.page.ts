import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendIdHotelService } from '../send-id-hotel.service';

import { hotels, IHotel } from '../shared/hotel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  idHotel: number;
  hotels: IHotel[] = hotels;

  constructor(private router: Router, private data: SendIdHotelService) {}
  
  ngOnInit() {
  	this.data.currentIdHotel.subscribe(id => this.idHotel = id)
  }

  openHotel(hotel: IHotel) {
  	this.data.changeIdHotel(hotel.id);
  	this.router.navigate(['/current-hotel']);
  }

  signOut() {
	this.router.navigate(['/login']);
  }
}
