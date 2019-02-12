import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  registerUserData = {}
  constructor(private _user:UserService,
              private _router:Router) { }

  ngOnInit() {
    
  }

  addUser(){
    this._user.addUser(this.registerUserData)
    .subscribe(
      res => {  
        localStorage.setItem("UserName",res.FirstName + ' '+ res.LastName)
        this._router.navigate(['/success'])  
      },
      err => console.log ("err")
    )  
  }

  resetForm(){
    this.registerUserData= {
      FirstName :"",
      LastName :"",
      SSINo:"",
      Email:""
    }
  }

}
