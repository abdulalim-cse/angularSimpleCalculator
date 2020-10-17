import { Component} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  constructor() { }

  public num1:number;
  public num2:number;
  public result:number;

  // Form Sum Method
  addition():any{
    this.result = this.num1 + this.num2;
  }

  // Substrac Method
  subtrac():any{
    this.result = this.num1 - this.num2;
  }
  // Multiplication Method
  muliplication():any{
    this.result = this.num1 * this.num2;
  }
  // Division Method
  division():any{
    this.result = this.num1 / this.num2;
  }
}
