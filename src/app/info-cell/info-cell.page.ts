import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SendIdHotelService } from '../send-id-hotel.service';
import { Location } from '@angular/common';  
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { ID } from '../shared/empty.ID';

@Component({
  selector: 'app-info-cell',
  templateUrl: './info-cell.page.html',
  styleUrls: ['./info-cell.page.scss'],
})

export class InfoCellPage implements OnInit {

  cell: any;
  user: any;
  userId: string;
  userPurse: number = 0; 

  private querySubscriptionCell: Subscription;
  private querySubscriptionUser: Subscription;
  private serviceSubscription: Subscription;

  constructor(
    private router: Router, 
    private data: SendIdHotelService, 
    private location: Location,
    private apollo: Apollo,
    private localStorage: LocalStorage
  ) { }

  ngOnInit() {
  	this.serviceSubscription = this.data.currentIdCell.subscribe(id => {
  	  (id === ID) ? this.router.navigate(['/home']) : null;
      this.querySubscriptionCell = this.apollo.watchQuery({ query: gql`
        query {
          cell(id:"${id}"){
            name
            number
            cost
            hotel{ id }
            user{ id }
          }
        }
      `}).valueChanges.subscribe(result => {
        let { cell } = result.data;
        this.user = !cell ? false : cell.user === null ? false : cell.user.id;
        this.cell = cell;

        this.localStorage.getItem('user').subscribe(user => {
          this.userId = user;
          this.querySubscriptionUser = this.apollo.watchQuery({ query: gql`
            {
              user(id:"${user}"){ purse }
            }
          `}).valueChanges.subscribe(resultUser => {
            console.log(resultUser.data.user.purse);
            this.userPurse = resultUser.data.user.purse;
          });
        });
      }); 
    });
  }
  buyCell() {
    // this.userValue -= this.cell[0].cost;
    // this.cell[0].available = this.userId;
    // console.log(this.userValue);
  }
  goBack() {
	  this.location.back();
  }
  ngOnDestroy() {
    this.querySubscriptionCell.unsubscribe();
    this.querySubscriptionUser.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
}
