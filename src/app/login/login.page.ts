import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

import { SendIdHotelService } from '../send-id-hotel.service';

import * as Query from '../queries/GraphQL.Queries';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy  {

  users: any[];

  private querySubscription: Subscription;

  constructor(
  	private router: Router, 
  	private apollo: Apollo,
  	private data: SendIdHotelService
  ) {}

  ngOnInit() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/home']);
    }
  	this.querySubscription = this.apollo.watchQuery({ query: Query.Users })
      .valueChanges.subscribe((result: any) => {
        this.users = result.data && result.data.users;
    });
  }   

  sendUserToService(user: any){
    localStorage.setItem('userToken', user.id);
    this.router.navigate(['/home']);
  }

  sendForm(login, password){
  	this.users.map(user => 
  	  user.name === login.value 
  		? user.password === password.value 
  		? this.sendUserToService(user)
  		: console.log('Incorrect data')
  		: null
  	);
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  
}
