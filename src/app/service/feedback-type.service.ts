import { Injectable } from '@angular/core';
import { APIResponseModel, FeedbackType } from '../model/interface/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackTypeService {

  constructor(private http: HttpClient) { }

  getAllFeedbackType() {
    return this.http.get<APIResponseModel>("http://localhost:5271/GetAllFeedbackType?pageNumber=1&pageSize=100")
  }
  //createFeedbackType() {
  //  return this.http.post<APIResponseModel>("http://localhost:5271/CreateFeedbackType")
  //}
  //createFeedbackType(obj: FeedbackType): Observable<APIResponseModel> {
  createFeedbackType(obj: FeedbackType): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>("http://localhost:5271/CreateFeedbackType", obj)
    //return this.http.post<APIResponseModel>("http://localhost:5271/CreateFeedbackType", obj, {
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //});
  }

  updateFeedbackType(obj: FeedbackType): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>("http://localhost:5271/UpdateFeedbackType", obj)
  }

  deleteFeedbackTypeId(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>("http://localhost:5271/DeleteFeedbackType/" + id)
  }
}
