import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users = []
  constructor(private _user:UserService,
              private activateroute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.getAllUsers()
  }

  //Code to get all resgitered users
  getAllUsers(){
    this._user.getAllUsers()
    .subscribe(
      res => this.users = res,
      err => console.log (err)
    )  
  }

  //logic for Go to User link
  goToAddUser(){
    this.router.navigate(['adduser'])
  } 

}
