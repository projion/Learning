import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackTypeService {

  constructor(private http: HttpClient) { }

  getAllFeedbackType() {
    return this.http.get<APIResponseModel>("http://localhost:5271/GetAllFeedbackType?pageNumber=1&pageSize=100")
  }
}
