import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  phoneModel = '+78005553535';
  constructor() {
    const fibonacci = this.getFibonacci(5);
  }

  private getFibonacci(number: number): number {
    return number < 1
      ? 0
      : number <= 2
      ? 1
      : this.getFibonacci(number - 1) + this.getFibonacci(number - 2);
  }
}
