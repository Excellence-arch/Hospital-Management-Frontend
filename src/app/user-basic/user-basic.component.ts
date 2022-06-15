import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css'],
})
export class UserBasicComponent implements OnInit {
  public patient: any;
  public error: any = '';
  public success: any = '';

  constructor(public accountService: AccountsService) {}

  ngOnInit(): void {
    this.accountService.basic.subscribe((res: object) => {
      this.patient = res;
    });
  }

  saveEdit() {
    this.success = '';
    this.error = '';
    this.accountService.editPatient(this.patient).subscribe((res: any) => {
      if (res.status == false) {
        this.success = '';
        this.error = res.message;
      } else {
        this.error = '';
        this.success = res.message;
      }
    });
  }

}
