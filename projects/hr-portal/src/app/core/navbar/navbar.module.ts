/**
 * @author : Bhumi Desai
 * @created date: 20/03/2019
 * @description : NavbarModule includes topbar and sidebar
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

/** used for declaration, import and export modules and components */
@NgModule({
  declarations: [SidebarComponent, TopbarComponent],
  exports: [SidebarComponent, TopbarComponent],
  imports: [AppRoutingModule, CommonModule],
})
export class NavbarModule { }
