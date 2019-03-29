/**
 *  @author Naim Shaikh
 *  @createdDate 22-03-2019
 *  @description This module file is used for declare all the features
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// ------------------------------------------------------------
import { AppRoutingModule } from '../../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

/**
 * NgModule - This module use for declare all the features
 */
@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
  ],
})
export class NavbarModule { }
