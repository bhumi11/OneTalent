/**
 * @author : Gaurang Valia
 * @class : CareerRoutingModule
 * @description : it is route of career Component
 * Created Date : 25-03-2019
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career.component';

const routes: Routes = [
  {
    path: '',
    component: CareerComponent,
  },
];
// Ng module is use to imports of routing module
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
// It is use to CareerPage routing
export class CareerRoutingModule { }
