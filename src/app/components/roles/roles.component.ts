import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  //string, number, boolean, date, object, array null undefined
  firstName: string = "Angular Tutorial";
  angularVersion = "Version 18.2";

  version: number = 18.2;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "radio"; /*button*/
  selectedState: string = '';

  showWelcomeAlert() { 
    alert("Welcome to angular 18 tutorial")
  }
  showMessage(message: string) {
    alert(message)
  }
}

