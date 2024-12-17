import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
//import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    //RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];

  password!: string;

  loginObj: any = {
    email: 'zion',
    password: '1234'
  }
  constructor(public layoutService: LayoutService, private router: Router, private loginService: LoginService) { }


  onLogin() {
    const loginData = {
      username: this.loginObj.email,
      password: this.loginObj.password,
      deviceId: 'sample-device-id',
      ipAddress: 'sample-ip-address',
      webServerId: 'sample-web-server-id',
      appVersion: '1.0.0'
    };


    this.loginService.getLogin(loginData).subscribe((res: any) => {
      debugger;
      if (res.token) {
        //alert("Login Successfully")
        localStorage.setItem('userToken', res.token)
        this.router.navigate(['/feedbacktype']);
      } else {
        alert(res.message);
      }
    })


    //if (this.loginObj.email == 'zion' && this.loginObj.password == "1234") {
    //  //localStorage.setItem('empErpUser', this.loginObj.email)
    //  this.router.navigateByUrl('/');
    //} else {
    //  alert("Wring Credential")
    //}
  }


}
