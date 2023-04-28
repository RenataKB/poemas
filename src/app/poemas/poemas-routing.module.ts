import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemasComponent } from './poemas.component';

const routes: Routes = [{ path: '', component: PoemasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoemasRoutingModule { }
