import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.url + 'allUsers');
  }

  saveUser(data: any) {
    return this.http.post(this.url + 'addUser', data);
  }

  delMe(id: any) {
    return this.http.delete(this.url + 'user/' + id);
  }

  getUser(id: any) {
    return this.http.get(this.url + 'user/' + id);
  }

  
}
