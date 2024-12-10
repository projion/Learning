import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClick = new EventEmitter<any>(); //emit event for passing from child to parent

  onClick() {
    debugger;
    this.onBtnClick.emit('admin');    //emitting or passing data using event from child to parent
  }
}
