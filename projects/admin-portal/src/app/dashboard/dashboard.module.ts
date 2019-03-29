import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// ------------------------------------------------------------------
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * Ng module -  This module use for declare all the features
 */
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
