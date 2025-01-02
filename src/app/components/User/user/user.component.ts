import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { UserService } from '../../../service/user.service';
import { APIResponseModel } from '../../../model/interface/common';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ButtonModule,
    SliderModule,
    ProgressBarModule,
    ToolbarModule,
    RouterModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {



  loading: boolean = true;
  @ViewChild('filter') filter!: ElementRef;
  constructor(private service: UserService, private http: HttpClient) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loadAllUser();
  }
  dataList: any[] = [];
  loadAllUser() {
    //debugger;
    this.http.get("http://localhost:5271/GetAllUser?pageNumber=1&pageSize=100").subscribe((res: any) => {
      //this.dataList = res.data;
      //debugger;
      if (res.success) {
        this.dataList = res.data.paginatedData;
      }
      //debugger;
    }, error => {
      alert("Error from API");
    })
  }
  //loadAllUser() {
  //  debugger;
  //  this.service.getAllUser().subscribe((res: any) => {
  //    this.dataList = res.data;
  //    //if (res.success) {
  //    //  debugger;
  //    //}
  //    //else
  //    //  alert(res.message);
  //  })
  //}

}
