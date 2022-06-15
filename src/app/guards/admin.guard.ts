import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  public user: any = false;

  constructor(public router: Router, public adminService: AdminService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.adminService.selectedPatient.subscribe((res: any) => {
      if (res.firstname) {
        this.user = res;
      }
    });
    if (this.user == false) {
      this.router.navigate(['/admin']);
    }
    return true;
  }
}
