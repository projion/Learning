import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  // client start
  GetAllClients(): Observable<APIResponseModel> {
   return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }

  addUpdateClient(obj: Client): Observable<APIResponseModel> {
   return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj)
  }

  deleteClientByClientId(id: number): Observable<APIResponseModel> {
   return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+id)
  }
  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  // client end

  // clientProject start
  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
   }
  addUpdateClienProject(obj: Client): Observable<APIResponseModel> {
  return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
  }
  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClientProjects")
  }
  getAllClientProject(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT)
  }
  // clientProject end
}
