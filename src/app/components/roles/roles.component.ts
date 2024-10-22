import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  //roleList: any[] = [];
  roleList: IRole[] = [];

  //constructor(private http: HttpClient) {   // old way to DI HttpClient
  //}
  http = inject(HttpClient);  // new way to DI HttpClient

  ngOnInit(): void {
    //alert('Method not implemented. from ngOnInit');
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
      this.roleList = res.data;
    })
  }

}

