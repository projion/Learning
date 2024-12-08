import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';  // Import RouterOutlet for standalone component

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Ensure this is styleUrls (plural)
})
export class AppComponent {
  title = 'RouteTest';
}
