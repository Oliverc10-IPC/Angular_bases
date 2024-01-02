import { NgModule } from '@angular/core';
import { counterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    counterComponent
  ],
  exports: [
    counterComponent
  ],
  imports: [
  CommonModule
  ]

})
export class CounterModule { }
