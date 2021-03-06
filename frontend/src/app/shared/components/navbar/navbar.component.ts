import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private user: UserService) { }

  login: Boolean;
  name: string;

  ngOnInit() {
    this.login = this.user.userLoggedIn;
    this.name = this.user.userName;
  }

  logout(): void {
    this.user.userLogout();
    this.login = this.user.userLoggedIn;
    this.name = this.user.userName;
  }

}
