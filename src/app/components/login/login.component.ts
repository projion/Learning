import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password:''
  }
  /*router = Inject(Router)*/
  constructor(private router: Router) { }

  onLogin() {
    if (this.loginObj.email == 'admin@gmail.com' && this.loginObj.password == "112233") {
      this.router.navigateByUrl('/client');
      localStorage.setItem('empErpUser', this.loginObj.email)
    } else {
      alert("Wring Credential")
    }
  }
}
