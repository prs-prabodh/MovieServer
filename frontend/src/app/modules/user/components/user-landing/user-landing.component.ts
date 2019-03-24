import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  constructor(private http: HttpClient, private user: UserService) { }

  hide: boolean = true;
  bit: number = 0;
  name: string = '';
  username: string = '';
  password: string = '';
  messageVisibility: boolean = false;
  messages: string = '';
  userAuthenticated: boolean = false;
  status: string = '';
  loginURL: string = 'http://127.0.0.1:8000/login';
  registerURL: string = 'http://127.0.0.1:8000/register';

  ngOnInit() {
  }

  setBit(update): void {
    this.messageVisibility = false;
    this.messages = '';
    this.name = '';
    this.password = '';
    this.username = '';
    this.bit = update;
  }

  login(): void {
    console.log('angular pings');
    // this.status = this.http.get(this.loginURL + "/" + this.username + "/" + this.password)['status']
    this.http.get(this.loginURL + "/" + this.username + "/" + this.password).subscribe(
      data => {
        this.status = data['status'];
        this.messages = data['message'];
        this.name = data['name'];
      },
      error => console.log(error),
      () => {
        if (this.status == 'success') {
          this.user.userLogin(this.name);
        }
        else {
          this.messageVisibility = true;
        }
      }
    );
  }
  register(): void {
    this.http.get(this.registerURL + "/" + this.name + "/" + this.username + "/" + this.password).subscribe(
      data => {
        this.status = data['status'];
        this.messages = data['message'];
      },
      error => console.log(error),
      () => {
        if (this.status == 'success') {
          this.user.userLogin(this.name);
        }
        else {
          this.messageVisibility = true;
        }
      }
    );
  }

}
