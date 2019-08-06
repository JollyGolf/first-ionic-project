import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const Users = gql`
  query {
    users{
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
export class LoginPage {

  users: any[];

  constructor(private router: Router, private apollo: Apollo) {}

  ngOnInit() {
  	this.apollo.watchQuery({ query: Users })
      .valueChanges.subscribe(result => {
        this.users = result.data && result.data.users;
      });
  }   

  sendForm(login: string, password: string){
  	this.users.map(user => 
  	  user.name === login.value 
  		? user.password === password.value 
  		? this.router.navigate(['/home']) 
  		: console.log('Incorrect data')
  		: null
  	);
  }
}
