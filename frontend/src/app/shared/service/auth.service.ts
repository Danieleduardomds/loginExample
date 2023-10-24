import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(): boolean { 
    const token = Cookies.get('token');   
    if (!token) {
      this.router.navigate(["/"]);    
      return false;
    }
    else { 
      return true;
    }
  }
}
