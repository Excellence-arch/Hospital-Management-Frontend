import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-health-info',
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.css']
})
export class HealthInfoComponent implements OnInit {
  public patient: any;
  public error: any = "";
  public success: any = "";

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.selectedRecord.subscribe((res: object) => {
      this.patient = res;
    })
  }

  saveEdit() {
      this.success = '';
      this.error = "";
    this.adminService.editHealthRecord(this.patient).subscribe((res: any) => {
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
