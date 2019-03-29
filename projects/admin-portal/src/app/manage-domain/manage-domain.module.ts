/**
 * @author - Naim Shaikh
 * @createdDate 22-03-2019
 * @description - This module file are fetures module for manage-domain.
 */

import { NgModule } from '@angular/core';
// ------------------------------------------------------------------------
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ManageDomainRoutingModule } from './manage-domain-routing.module';
import { ManageDomainService } from './manage-domain.service';

/**
 * NgModule - This module use for declare all the features
 */
@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    ManageDomainRoutingModule,
    SharedModule,
  ],
  providers: [ManageDomainService],
})
export class ManageDomainModule { }
