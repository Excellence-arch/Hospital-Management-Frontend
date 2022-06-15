import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent implements OnInit {
  public patient: any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.selectedPatient.subscribe((patient: object) => {
      this.patient = patient;
    })
  }

}
