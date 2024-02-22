import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

  constructor(public dbzService: DbzService){

  }
}
