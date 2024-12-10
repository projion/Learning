import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() alertType: string = '';    /*property decorator*/
  @Input() message: string = 'Write Something';    /*property decorator*/
}
