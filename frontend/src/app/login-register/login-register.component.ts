import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  hide: boolean = true;
  bit: number = 0;
  name: string = '';
  username: string = '';
  password: string = '';
  messageVisibility: boolean = false;
  messages: string  = '';
  userAuthenticated: boolean = false;
  status:string = '';
  loginURL: string = 'http://127.0.0.1:8000/login';
  registerURL: string = 'http://127.0.0.1:8000/register';

  constructor(private http: HttpClient, private user: UserService) { }

  ngOnInit() {

  }

  setBit(update): void {
    this.messageVisibility = false;
    this.messages = '';
    this.name = '';
    this.password = '';
    this.username = '';
    this.bit=update;
  }

  login(): void {
    console.log('angular pings');
    // this.status = this.http.get(this.loginURL + "/" + this.username + "/" + this.password)['status']
    this.http.get(this.loginURL+"/"+this.username+"/"+this.password).subscribe(
      data => {
        this.status=data['status']; 
        this.messages=data['message'];
        this.name=data['name'];
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
    this.http.get(this.registerURL+"/"+this.name+"/"+this.username+"/"+this.password).subscribe(
      data => {
        this.status=data['status'];
        this.messages=data['message'];
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
