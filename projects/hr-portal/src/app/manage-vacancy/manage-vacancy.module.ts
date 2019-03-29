import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ManageVacancyRoutingModule } from './manage-vacancy-routing.module';

/**
 * used for declarations of components and import the modules
 */
@NgModule({
  declarations: [ListComponent],
  imports: [SharedModule, ManageVacancyRoutingModule],
})

/**
 *  ManageVacancy Module is used for managing the vacancies
 */
export class ManageVacancyModule { }
