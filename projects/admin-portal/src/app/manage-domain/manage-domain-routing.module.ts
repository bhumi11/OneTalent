/**
 * @author - Naim Shaikh
 * @createDate 22-03-2019
 * @description - This routing file are set the routes for manage-domain module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// -----------------------------------------------------
import { ListComponent } from './list/list.component';

/**
 * This route of manage-domain child Routes.
 */
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
 * NgMOdule - This module use for set the routes
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ManageDomainRoutingModule { }
