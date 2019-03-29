/**
 * @author Rayhan Kasli
 * @createdDate 21-03-2019
 * @description This module file is feature module for manage-designation
 */
import { NgModule } from '@angular/core';
// -------------------------------------------------
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ManageDesignationRoutingModule } from './manage-designation-routing.module';
import { ManageDesignationService } from './manage-designation.service';

/**
 * ManageDesignationModule class is use to declare feature of this module
 */
@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    ManageDesignationRoutingModule,
    SharedModule,
  ],
  providers: [
    ManageDesignationService,
  ],
})
export class ManageDesignationModule { }
