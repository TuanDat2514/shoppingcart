import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username!:String;
  public password!:String;
  USER_NAME_SESSION = 'username_session';
  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    var params= new HttpParams()
      .set('username',username)
      .set('password',password);
    return this.http.get<Response>(environment.URL+environment.USERLOGIN+params)
  }
  registerSuccessfulLogin(username:any) {
    sessionStorage.setItem(this.USER_NAME_SESSION, username)
  }
  // logout() {
  //   sessionStorage.removeItem(this.USER_NAME_SESSION);
  //   this.username = null;
  //   this.password = null;
  // }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION)
    if (user === null) return false
    return true
  }
  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION)
    if (user === null) return ''
    return user
  }
}
