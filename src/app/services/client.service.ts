import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  // client start
  GetAllClients(): Observable<APIResponseModel> {
   return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients")
  }

  addUpdateClient(obj: Client): Observable<APIResponseModel> {
   return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj)
  }

  deleteClientByClientId(id: number): Observable<APIResponseModel> {
   return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId="+id)
  }
  // client end
  // clientProject start
  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + "GetAllEmployee")
   }
  addUpdateClienProject(obj: Client): Observable<APIResponseModel> {
  return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
  }
  // clientProject end
}
