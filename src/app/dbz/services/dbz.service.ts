import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';

@Injectable({
   providedIn: 'root'
  })

export class DbzService {
  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000
    },
    {
    name: 'Goku',
    power: 9500

    },
    {
    name: 'Vegeta',
    power: 8500
    }
  ];

  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }

  newCharacter(character: Character): void{
    console.log(character);
    this.characters.push(character);
  }
  constructor() {}


}
