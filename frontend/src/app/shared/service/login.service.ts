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
    const body = { login: login, password: password}; 
    return this.http.post<any>(this.url + '/login', body);
  }

  LoadDataUsers(): Observable<any> {  
     return this.http.get<any>(this.url + '/users');
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/deleteUser/'+`${id}`).pipe(
      res => res,
      error => error      
    );
  }

  updateUser(id:any,login: string | null, password: string | null): Observable<any> {  
    const body = { login: login, password: password}; 
    console.log(this.url + '/updateUser/'+`${id}`);
    console.log(body);
    return this.http.put<any>(this.url + '/updateUser/'+`${id}`, body);
  }
}
