import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  public patient:any;
  public error: any = "";
  public success: any = "";

  constructor(public adminService: AdminService, public accountService: AccountsService) { }

  ngOnInit(): void {
    this.adminService.selectedPatient.subscribe((patient: object) => {
      this.patient = patient;
    });
  }

  saveEdit() {
    this.success = '';
    this.error = '';
    this.accountService.editPatient(this.patient).subscribe((res: any) => {
      if(res.status == false ) {
        this.success = "";
        this.error = res.message;
      }  else {
        this.error = "";
        this.success = res.message;
      }
    })
  }
}
