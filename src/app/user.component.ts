import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p> Welcome to {{name}} Angular Application</p>
    <input type="text" (input)="onUserInput($event)" [value]='name'>
    <!-- <input type="text" [(ngModel)]='name'> -->
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }

}
