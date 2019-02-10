import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents = []
  constructor(private _user:UserService,) { }

  ngOnInit() {
    this.getAllDocuments()
  }

  getAllDocuments(){
    this._user.getAllDocuments()
    .subscribe(
      res => this.documents = res,
      err => console.log (err)
    )  
  }
    
  
}
