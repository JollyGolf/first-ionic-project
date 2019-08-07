import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';  
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { SendIdHotelService } from '../send-id-hotel.service';
import { ID } from '../shared/empty.ID';

const Cells = gql`
  query {
    cells {
      id
      name
      hotel{
        id
      }
    }
  }
`;

@Component({
  selector: 'app-current-hotel',
  templateUrl: './current-hotel.page.html',
  styleUrls: ['./current-hotel.page.scss'],
})

export class CurrentHotelPage implements OnInit, implements OnDestroy {

  hotel: object;
  cells: object;

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
      this.apollo.watchQuery({ query: gql`
        query {
          hotel(id:"${id}") {
            id
            name
            cells {
              id
              name
            } 
          }
        }
      `}).valueChanges.subscribe(result => this.hotel = result.data.hotel);
      this.querySubscription = this.apollo.watchQuery({ query: Cells})
        .valueChanges.subscribe(result => {
          let flag = result.data && result.data.cells;
          this.cells = flag 
            ? flag.filter(cell => cell.hotel.id === id) 
            : null;
      });
    });
  }

  openCell(cell: object, hotel: object) {
    //console.log(cell.id, hotel.id);
  	this.data.changeIdCell(cell.id);
  	this.router.navigate(['/info-cell']);
  }

  goBack() { this.location.back() }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
}
