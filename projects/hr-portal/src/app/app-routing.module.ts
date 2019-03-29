/**
 * @author : Bhumi Desai
 * @created date: 20/03/2019
 * @description :AppRouting is created to define route for root module, which is called when app is intialized.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'manage-vacancy',
    loadChildren: './manage-vacancy/manage-vacancy.module#ManageVacancyModule',
  },
  {
    path: 'manage-leaves',
    loadChildren: './manage-leaves/manage-leaves.module#ManageLeavesModule',
  },
];
/**
 * imports the RouterModule and then export it
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

/**
 * This class is exported to provide routes to the application.
 */
export class AppRoutingModule { }
