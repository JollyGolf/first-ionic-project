import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LocalStorage } from '@ngx-pwa/local-storage';
import gql from 'graphql-tag';

import { SendIdHotelService } from '../send-id-hotel.service';
import { ID } from '../shared/empty.ID';


const Users = gql`
  query {
    users{
      id
      name
      password
    }
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, implements OnDestroy  {

  users: any[];

  private querySubscription: Subscription;

  constructor(
  	private router: Router, 
  	private apollo: Apollo,
  	private data: SendIdHotelService,
    private localStorage: LocalStorage
  ) {}

  ngOnInit() {
    this.localStorage.getItem('user').subscribe(user => {
      if(user != ID) this.router.navigate(['/home'])
    });

  	this.querySubscription = this.apollo.watchQuery({ query: Users })
      .valueChanges.subscribe(result => {
        this.users = result.data && result.data.users;
    });
  }   

  sendUserToService(user: object){
    this.localStorage.setItem('user', user.id).subscribe(() => {});
    this.router.navigate(['/home']);
  }

  sendForm(login: string, password: string){
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
