import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoggedIn: boolean = false;
  userName: string = '';

  constructor(private router: Router) { }

  userLogout(): void {
    console.log('Logged Out');
    this.userLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/']);
  }

  userLogin(name: string): void {
    this.userLoggedIn = true;
    this.userName = name;
    this.router.navigate(['/']);
  }
}
