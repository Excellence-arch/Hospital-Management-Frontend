import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountsService } from '../services/accounts.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(public accountService: AccountsService, public router: Router) {}
  public exist: any = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = JSON.parse(sessionStorage.getItem("token")!);
      this.accountService.getDashBoard(token).subscribe((res:any) => {
        // console.log(res);
        if(res.status == true) {
          this.accountService.basic.next(res.basic);
          this.accountService.health.next(res.health);
          this.exist = true;
        } else {
          sessionStorage.removeItem("token");
          this.router.navigate(["/login"]);
        }
      })
    return true;
  }
  
}
