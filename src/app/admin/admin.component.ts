import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public allPatients: any;
  public allHealthRecords: any;

  constructor(public adminService: AdminService, public router: Router) { }

  ngOnInit(): void {
    this.adminService.getPatients().subscribe((data: any) => {
      // console.log(data);
      this.allPatients = data.basic;
      this.allHealthRecords = data.health;
    })
    // console.log(this.allPatients);
  }

  showUser(i: number) {
    this.adminService.selectedPatient.next(this.allPatients[i]);
    this.adminService.selectedRecord.next(this.allHealthRecords[i]);
    this.router.navigate([`/admin/${this.allPatients[i].firstname}`])
  }

}
