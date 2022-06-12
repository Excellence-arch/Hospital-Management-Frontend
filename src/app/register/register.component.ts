import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public firstname: string = "";
  public lastname: string = "";
  public email: string = "";
  public address: string = "";
  public error: any;

  constructor(public accountsService: AccountsService, public router : Router) { }

  ngOnInit(): void {
  }

  register() {
    this.accountsService.registerUser({firstname: this.firstname, lastname: this.lastname, email: this.email, address: this.address}).subscribe((res: any) => {
      if (res.status == true) {
        alert(`Your login ID is ${res.id}`)
        this.router.navigate(["/login"]);
      } else {
        this.error = res.message;
      }
    })
  }

}
