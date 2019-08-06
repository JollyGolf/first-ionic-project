import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendIdHotelService } from '../send-id-hotel.service';

import { hotels, IHotel } from '../shared/hotel';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const Hotels = gql`
  query {
    hotels{
      id
      name
      description
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  hotelss: any[];

  idHotel: number;
  hotels: IHotel[] = hotels;

  constructor(private router: Router, private data: SendIdHotelService, private apollo: Apollo) {}
  
  ngOnInit() {
    this.apollo.watchQuery({ query: Hotels })
      .valueChanges.subscribe(result => {
        this.hotelss = result.data && result.data.hotels;
        console.log(result.data);
      });
  	this.data.currentIdHotel.subscribe(id => this.idHotel = id);

  }

  openHotel(hotel) {
  	this.data.changeIdHotel(hotel.id);
  	this.router.navigate(['/current-hotel']);
  }

  signOut() {
	this.router.navigate(['/login']);
  }
}
