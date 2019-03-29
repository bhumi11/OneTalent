/**
 * @author : Gaurang Valia
 * @class : AppRoutingModule
 * @description : This file used for routing of career module
 * Created Date : 20-03-2019
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'Careers',
    loadChildren: './career/career.module#CareerModule',
  },
];
/** Ng module is use to difine the exports -> routerModule and imports */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
// This module is provide the routing in app level
export class AppRoutingModule { }
