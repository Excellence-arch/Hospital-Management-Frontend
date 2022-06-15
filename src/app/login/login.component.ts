import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public id: any;
  public error: any;

  constructor(public accountService: AccountsService, public router: Router) { }

  ngOnInit(): void {
    // let p = 9371
  }

  login() {
    this.accountService.loginUser({id: this.id}).subscribe((res:any) => {
      if (res.status) {
        console.log(res);
        sessionStorage.setItem("token", JSON.stringify(res.token));
        this.accountService.basic.next(res.basic);
        this.accountService.health.next(res.health);
        this.router.navigate(["/dashboard"]);
      } else {
        this.error = res.message;
      }
    })
  }
}
