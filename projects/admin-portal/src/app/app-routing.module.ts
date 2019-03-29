/**
 * @author - Naim Shaikh
 * @createDate 22-03-2019
 * @description - This routing file are set the routes for all the module.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * This route of app module.
 */
const routes: Routes = [

    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'designation',
        loadChildren: './manage-designation/manage-designation.module#ManageDesignationModule',
    },
    {
        path: 'domain',
        loadChildren: './manage-domain/manage-domain.module#ManageDomainModule',
    },
];

/**
 * This is routing file is use to routing with feature module
 */
@NgModule({
    exports: [
        RouterModule,
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule { }
