import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  sendForm(login: string, password: string){
  	(login.value === 'root' && password.value === '0000') 
  	  ? this.router.navigate(['/home'])
  	  : console.log('Incorrect data');
  }
}
