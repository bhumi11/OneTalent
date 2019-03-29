import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];

/**
 * imports the RouterModule and then export it
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ManageLeavesRoutingModule { }
