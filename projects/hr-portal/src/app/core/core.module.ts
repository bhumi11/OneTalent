/**
 * @author : Bhumi Desai
 * @created date: 20/03/2019
 * @description : Core Module for the environment-config, Header and Sidebar
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderService } from './loader/loader.service';
import { NavbarModule } from './navbar/navbar.module';

/** used for import and export modules */
@NgModule({
  exports: [NavbarModule],
  imports: [CommonModule, NavbarModule],
  providers : [LoaderService],
})

/** Core Module for the environment-config, Header and Sidebar */
export class CoreModule { }
