import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LocalStorage } from '@ngx-pwa/local-storage';
import gql from 'graphql-tag';

import { SendIdHotelService } from '../send-id-hotel.service';
import { ID } from '../shared/empty.ID';

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

export class HomePage implements OnInit, implements OnDestroy{

  hotels: any[];

  private querySubscription: Subscription;
  
  constructor(
    private router: Router, 
    private data: SendIdHotelService, 
    private apollo: Apollo,
    private localStorage: LocalStorage
  ) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery({ query: Hotels })
      .valueChanges.subscribe(result => {
        this.hotels = result.data && result.data.hotels;
    });
  }

  openHotel(hotel: object) {
  	this.data.changeIdHotel(hotel.id);
  	this.router.navigate(['/current-hotel']);
  }

  signOut() {
    this.localStorage.setItem('user', ID).subscribe(() => { console.log('Success set {ID}')});
	  this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
