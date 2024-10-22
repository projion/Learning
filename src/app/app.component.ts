import { Component } from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { BasicPracticesComponent } from './components/basic-practices/basic-practices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MasterComponent, BasicPracticesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
