import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem('token')) {
      return true;
      //SI TENEMOS TOKEN LO DEJAMOS PASAR
    } else {
      //SI EL USUARIO NO ESTA LOGADO LO LLEVAMOS A LOGIN
      //Y TENEMOS QUE LLEVAR EL ESTADO DE LA URL PARA QUE NO SE PIERDAN LOS PARAMETROS
      return this._router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
    }
  }
}

