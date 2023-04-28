import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoemasRoutingModule } from './poemas-routing.module';
import { PoemasComponent } from './poemas.component';


@NgModule({
  declarations: [
    PoemasComponent
  ],
  imports: [
    CommonModule,
    PoemasRoutingModule
  ]
})
export class PoemasModule { }
