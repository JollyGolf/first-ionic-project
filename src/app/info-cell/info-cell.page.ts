import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

import { ID } from '../shared/empty.ID';
import * as Query from '../queries/GraphQL.Queries';
import { SendIdHotelService } from '../send-id-hotel.service';

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
    private apollo: Apollo
  ) { }

  ngOnInit() {
  	this.serviceSubscription = this.data.currentIdCell.subscribe(id => {
  	  (id === ID) ? this.router.navigate(['/home']) : null;
      
      this.querySubscriptionCell = this.apollo.watchQuery({ 
        query: Query.getCellById,
        variables: { id }
      }).valueChanges.subscribe((result: any) => {
        let { cell } = result.data;
        this.user = !cell ? false : cell.user === null ? false : cell.user.id;
        this.cell = cell;
        this.userId = localStorage.getItem('userToken');

        this.querySubscriptionUser = this.apollo.watchQuery({ 
          query: Query.getUserById,
          variables: { id: localStorage.getItem('userToken') }
        }).valueChanges.subscribe((resultUser: any) => {
          this.userPurse = resultUser.data.user.purse;
        });
      }); 
    });
  }
  buyCell() {
    this.apollo.mutate({ 
        mutation: Query.updateCellMutation, 
        variables: { 
          id: this.cell.id,
          available: this.userId 
        }
      }).subscribe((resultUpdate: any) => {
        console.log(resultUpdate);
      });

      this.apollo.mutate({ 
        mutation: Query.updateUserMutation, 
        variables: { 
          id: this.userId, 
          purse: this.userPurse - this.cell.cost
        },
        refetchQueries: [
          { 
            query: Query.getCellById,
            variables: { id: this.cell.id }
          },
          {
            query: Query.getUserById,
            variables: { id: localStorage.getItem('userToken') }
          }
        ]
      }).subscribe((resultUpdate: any) => {
        console.log('Data was updated');
      });
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
