import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Counter Component</h1>
  <h3>Counter: {{counter}}</h3>
  <button (click)="incrementar(3)">+3</button>
<button (click)="reset()">Reset</button>
<button (click)="decrementar(1)">-1</button>

  `
})

export class counterComponent{
  constructor() { }

  counter: number = 0;

  incrementar(valor: number){
    this.counter += valor;
  }
  decrementar(valor: number){

    this.counter -= valor;
  }
  reset(){
    this.counter = 0;
  }


}
