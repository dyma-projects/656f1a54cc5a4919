import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public inputType: string = 'date';
  public color: string = 'orange';

  constructor() {
    setTimeout(() => {
      this.inputType = 'number';
    }, 5000);
  }

  ngOnInit() {}

  public onChangeColor(color: string): void {
    this.color = color;
  }

  public square(nbr: number): number {
    return nbr * nbr;
  }
}
