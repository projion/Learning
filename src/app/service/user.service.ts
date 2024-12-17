import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllUser() {
    return this.http.get<any>("http://localhost:5271/GetAllUser?pageNumber=1&pageSize=100")
  }
}
