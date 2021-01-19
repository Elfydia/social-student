import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if('auth' === next.routeConfig.path && this.userService.has()){
         return this.router.navigate(['/contacts', 'dashboard']);
      }

      if('contacts' === next.routeConfig.path && !this.userService.has()){
          return this.router.navigate(['/auth', 'login']);
      }

      return true;
      
  }
  
}
