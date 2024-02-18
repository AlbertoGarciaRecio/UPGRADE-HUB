import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

register(user: any) {
  return this.http.post('http://localhost:8084/api/users/register', user)
}

login(user: any) {
  return this.http.post('http://localhost:8084/api/users/login', user)
}

logout() {
  return this.http.get('http://localhost:8084/api/users/logout')
}
}