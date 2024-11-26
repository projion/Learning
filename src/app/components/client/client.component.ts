import { Component,OnInit } from '@angular/core';
//import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core/';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,UpperCasePipe, DatePipe, JsonPipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  currentDate:Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];
  //clientService = inject(ClientService);
  constructor(private clientService: ClientService) { }

  userList$ : Observable<any> = new Observable<any>;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }
  loadClient() {
    this.clientService.GetAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }
  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Client created Successfully");
        this.loadClient();
        this.clientObj = new Client()
      } else {
        alert(res.message);
      }
    })
  }
  onDelete(id:number) {
    const IsDelete = confirm("Are you sure you want to delete?");
    if (IsDelete) {
      this.clientService.deleteClientByClientId(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client deleted Successfully");
          this.loadClient();
        } else {
          alert(res.message);
        }
      })
    }
  }
  onEdit(item:Client) {
    this.clientObj = item;
  }
}
