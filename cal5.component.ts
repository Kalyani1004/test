import { Component } from '@angular/core';

@Component({
  selector: 'app-cal5',
  templateUrl: './cal5.component.html',
  styleUrls: ['./cal5.component.css']
})
export class Cal5Component {
  num1: number = 0; 
  num2: number = 0; 
  answer: number = 0; 
  operator: any; add() {
    this.answer = this.num1 + this.num2;
    this.operator = "addition";
  }
sub() {
  this.answer = this.num1 - this.num2;
  this.operator = "substraction";
} 
mul() {
  this.answer = this.num1 * this.num2;
  this.operator = "multiplication";
}
div() {
  if (this.num2 === 0) {
    alert("Cannot divide by zero.");
    this.answer = Infinity;
  } else {
    this.answer = this.num1 / this.num2;
    this.operator = "division";
  }
}
clear() {
  this.num1 = 0;
  this.num2 = 0;
  this.answer = 0;
}
}
