import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/client';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe],
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

  firstName = signal("Angular 18");
  projectList = signal<ClientProject[]>([])

  ngOnInit(): void {
    const name = this.firstName();
    this.getAllClient()
    this.getAllEmployee()
    this.getAllClientProjects()
    this.getAllClientProject()
  }

  changeFName(){
    this.firstName.set("Hello");
  }
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("a", [Validators.required, Validators.minLength(4)]),
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
  getAllClientProject() {
    this.clientSrv.getAllClientProject().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data);
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



















