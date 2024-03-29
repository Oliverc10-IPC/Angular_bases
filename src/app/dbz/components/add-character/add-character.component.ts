import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class addCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.newCharacter);
    if (this.newCharacter.name.length === 0) return;
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter= {name:"", power: 0}
  }
}
