import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthSecurityService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) {  }

  generateToken(credentials:any){
    //token generate
    return this.http.post(`${this.url}/auth`,credentials);
  }

  loginUser(token:string){
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==null || token ==undefined || token==""){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}








