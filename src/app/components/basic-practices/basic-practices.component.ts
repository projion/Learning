import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-practices',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-practices.component.html',
  styleUrl: './basic-practices.component.css'
})
export class BasicPracticesComponent {
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
