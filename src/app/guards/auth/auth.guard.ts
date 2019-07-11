import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage.get('access_token').then((val) => {
        if (!val) {
          this.router.navigate(['/login']);
          resolve(false);
        } else {
          resolve(true);
        }
      }).catch((error) => {
        this.router.navigate(['/login']);
        resolve(false);
      });
    });
  }
}
