import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 12000
  }]



  onDeleteCharacter(id?:string): void{
    //TODO: Emitir el ID del personaje a eliminar
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }

}
