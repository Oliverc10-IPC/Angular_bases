import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 25;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;

  }

  changeName(): void {

    this.name = 'ironman';
  }

  changeAge(): void {
    this.age = 45;
  }

  reset(): void {
    this.name = 'spiderman';
    this.age = 25;
  }

}
