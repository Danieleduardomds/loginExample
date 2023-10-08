import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUsers } from '../models/list-users.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.URL;
  constructor(private http: HttpClient) {}

  //const validationUser = async (request, response)
  validateLogin(
    login: string | null,
    password: string | null
  ): Observable<any> {
    const body = { login: login, password: password };
    return this.http.post<any>(this.url + '/login', body).pipe(
      (res) => res,
      (error) => error
    );
  }

  LoadDataUsers(): Observable<ListUsers[]> {
    return this.http.get<any>(this.url + '/users');
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/deleteUser/' + `${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  updateUser(
    id: any,
    login: string | null,
    password: string | null
  ): Observable<any> {
    const body = { login: login, password: password };
    console.log(this.url + '/updateUser/' + `${id}`);
    console.log(body);
    return this.http.put<any>(this.url + '/updateUser/' + `${id}`, body);
  }
}
