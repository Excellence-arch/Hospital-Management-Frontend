import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpClient: HttpClient) { }

  public selectedPatient = new BehaviorSubject(Object);
  public selectedRecord = new BehaviorSubject(Object);

  getPatients() {
    return this.httpClient.get("http://localhost:4000/admin/patients");
  }

  editHealthRecord(edit: any) {
    return this.httpClient.post("http://localhost:4000/admin/edit-health", edit)
  }
}
