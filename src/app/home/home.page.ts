import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

import { SendIdHotelService } from '../send-id-hotel.service';
import * as Query from '../queries/GraphQL.Queries';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy{

  hotels: any[];

  private querySubscription: Subscription;
  
  constructor(
    private router: Router, 
    private data: SendIdHotelService, 
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery({ query: Query.Hotels })
      .valueChanges.subscribe((result: any) => {
        this.hotels = result.data && result.data.hotels;
    });
  }

  openHotel(hotel: any) {
  	this.data.changeIdHotel(hotel.id);
  	this.router.navigate(['/current-hotel']);
  }

  signOut() {
    localStorage.removeItem('userToken');
	  this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
