import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _userUrl = "http://localhost:3000/api/users"
  _adduserUrl = "http://localhost:3000/api/adduser"
  _docUrl ="http://localhost:3000/api/uploads"

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this._userUrl)
  }

  addUser(registerUserData){
    return this.http.post<any>(this._adduserUrl,registerUserData)
  }

  getAllDocuments(){
    return this.http.get<any>(this._userUrl)
  }
}
