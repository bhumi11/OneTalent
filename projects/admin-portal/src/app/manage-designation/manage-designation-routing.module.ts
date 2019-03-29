/**
 * @author Rayhan Kasli
 * @createdDate 21-03-2019
 * @description This routing file is set all the routes of manage-designation module
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: ListComponent,
  },
];
/**
 * This ManageDesignationRoutingModule class is use to set routes of manage-designation module
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ManageDesignationRoutingModule { }
