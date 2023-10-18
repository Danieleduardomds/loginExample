import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})

export class canActiveUserList {
  constructor(public auth: AuthService,
    public router: Router
    ) { }

    canActivate(): boolean{
      const token: any = localStorage.getItem('token');
      let tokenPayload: any;
            
      try {
        tokenPayload = jwt_decode(token);
        return true;
      }
      catch (err) {
        localStorage.clear();
        this.router.navigate(['/']);
        return false;
      }
  

    }

}

