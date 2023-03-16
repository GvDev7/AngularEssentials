import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-dashboard',
  template: `
    <p [textContent]="onLoad"></p>
    <button (click)="onStateSwitch()">Click</button>
    <input type="text" [(ngModel)]="onLoad" />
  `,
})
export class DashboardComponent{
  @Input() onLoad;

  onStateSwitch() {
    this.onLoad = 'finished';
  }
}
