import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';  
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

import { SendIdHotelService } from '../send-id-hotel.service';
import { ID } from '../shared/empty.ID';
import * as Query from '../queries/GraphQL.Queries';

@Component({
  selector: 'app-current-hotel',
  templateUrl: './current-hotel.page.html',
  styleUrls: ['./current-hotel.page.scss'],
})

export class CurrentHotelPage implements OnInit, OnDestroy {

  hotel: any;
  cells: any;

  private querySubscription: Subscription;
  private serviceSubscription: Subscription;

  constructor(
    private router: Router, 
    private data: SendIdHotelService, 
    private location: Location, 
    private apollo: Apollo
  ) { }

  ngOnInit() {
  	this.serviceSubscription = this.data.currentIdHotel.subscribe(id => {
  	  (id == ID) ? this.router.navigate(['/home']) : null;
      this.apollo.watchQuery({ 
        query: Query.getHotelById, 
        variables: { id }
      }).valueChanges.subscribe((result: any) => this.hotel = result.data.hotel);
      this.querySubscription = this.apollo.watchQuery({ query: Query.Cells})
        .valueChanges.subscribe((result: any) => {
          let flag = result.data && result.data.cells;
          this.cells = flag 
            ? flag.filter(cell => cell.hotel.id === id) 
            : null;
      });
    });
  }

  openCell(cell: any, hotel: any) {
  	this.data.changeIdCell(cell.id);
  	this.router.navigate(['/info-cell']);
  }

  goBack() { this.location.back() }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
}
