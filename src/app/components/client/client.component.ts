import { Component,OnInit } from '@angular/core';
//import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core/';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { Client } from '../../model/class/client';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clientObj: Client = new Client();
  clientList: Client[] = [];
  //clientService = inject(ClientService);
  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loadClient();
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
      } else {
        alert(res.message);
      }
    })
  }
}
