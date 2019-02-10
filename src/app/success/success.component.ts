import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  username = localStorage.getItem("UserName")
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  goBacktoUsers(){
    this._router.navigate(['users'])
  }

  goToDocuments(){
    this._router.navigate(['documents'])
  }
  

}
