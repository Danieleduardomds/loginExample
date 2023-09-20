import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3333';
  constructor(private http: HttpClient) {}
  
  validateLogin(login: string | null, password: string | null): Observable<any> {
    // Defina o corpo da solicitação como um objeto JSON
    const body = { login: login, password: password}; 
    // const headers = {  'Content-Type': 'application/json' }; 
    return this.http.post<any>(this.url + '/login', body);
  }
}
