import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(public httpClient: HttpClient) {}

  public basic = new BehaviorSubject(Object);
  public health = new BehaviorSubject(Object);

  registerUser(newUser: any) {
    return this.httpClient.post(
      'http://localhost:4000/users/register',
      newUser
    );
  }

  loginUser(id: any) {
    return this.httpClient.post('http://localhost:4000/users/login', id);
  }

  editPatient(edit: any) {
    return this.httpClient.post('http://localhost:4000/users/edit', edit);
  }

  getDashBoard(token: any) {
    return this.httpClient.get("http://localhost:4000/users/dashboard", {headers: 
    {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })

  }
}
