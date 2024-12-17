import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(obj: any): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>("http://localhost:5271/api/Auth/login", obj)
  }
}
