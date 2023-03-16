import { Component } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApp';
  name = 'Gene';
  number = 2;
  onNameChange(newName) {
    this.name = newName;
  }
  onIncrease() {
    this.number = random(1, 30);
  }
}
