import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  // clientSrv = inject(ClientService);
  constructor(private clientSrv: ClientService) { }
  employeeList: Employee[] = [];
  clientList: Client[] = [];
  // clientProjectList:FormGroup[]=[];
  clientProjectList: any[] = [];
  ngOnInit(): void {
    this.getAllClient()
    this.getAllEmployee()
    this.getAllClientProjects()
  }

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("edfhfj"),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl("no details"),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }
  getAllClient() {
    this.clientSrv.GetAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }
  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addUpdateClienProject(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Project Created Successfully")
      } else {
        alert(res.message);
      }
    })
  }
  getAllClientProjects() {
    this.clientSrv.getAllClientProjects().subscribe((res: APIResponseModel) => {
      if (res.result) {
        this.clientProjectList = res.data;
        this.onSaveProject();
      }
      else
        alert(res.message);
    })
  }

}



















