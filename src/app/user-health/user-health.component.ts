import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-user-health',
  templateUrl: './user-health.component.html',
  styleUrls: ['./user-health.component.css']
})
export class UserHealthComponent implements OnInit {
  public patient: any;

  constructor(public accountService: AccountsService) { }

  ngOnInit(): void {
    this.accountService.health.subscribe((res: object) => {
      this.patient = res;
    })
  }

}
