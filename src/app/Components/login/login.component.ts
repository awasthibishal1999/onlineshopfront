import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("recieved")
        this._router.navigate(['/products']);
      },
      error=>{
        console.log("errror");
        this.msg="Bad Credentials, Please enter valid email and password";
      }
      
    );

  }

}
