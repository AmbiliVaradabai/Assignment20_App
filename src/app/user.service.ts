import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _userUrl = "http://localhost:3000/api/users"
  _adduserUrl = "http://localhost:3000/api/adduser"
  _docUrl ="http://localhost:3000/api/uploads"
  _downloadUrl ="http://localhost:3000/api/download"

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this._userUrl)
  }

  addUser(registerUserData){
    return this.http.post<any>(this._adduserUrl,registerUserData)
  }

  getAllDocuments(){
    return this.http.get<any>(this._docUrl)
  }

  UploadFile(formData){
    return this.http.post<any>(this._docUrl,formData)
  }

  downloadFile(file): Observable<any> {
    // Create url
    let url = this._downloadUrl;
    var body = { filename: file };

    return this.http.post(url, body, {
      responseType: "blob",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  deleteFile(filename){
    return this.http.get<any>(this._docUrl+"/"+filename)
  }

}
