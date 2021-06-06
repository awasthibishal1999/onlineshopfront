import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private registerService:RegistrationService, private router:Router) { }

  ngOnInit(){
   
  }
  
  registerUser(){
    this.registerService.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("Data received");
        this.router.navigate(['/login']);
        
},
      error =>{
        this.msg=error.error;
      }

    )
  }



}
