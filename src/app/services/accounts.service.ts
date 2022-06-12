import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(public httpClient: HttpClient) { }

  registerUser(newUser: any) {
    return this.httpClient.post("http://localhost:4000/users/register", newUser);
  }
}
