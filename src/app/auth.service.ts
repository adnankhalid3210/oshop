import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('http://localhost:3000/save',data);
  }

  loggedIn() {
   return window.localStorage.getItem('token')
  }
  
}
