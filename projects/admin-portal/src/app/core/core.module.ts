/**
 * @author Rayhan Kasli
 * @craetedDate 21-03-2019
 * @description This module file is used for create single instance
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// --------------------------------------------------------
import { EnvironmentConfigService } from './environment-config/environment-config.service';
import { LoaderService } from './loader/loader.service';
import { NavbarModule } from './navbar/navbar.module';

/**
 * NgModule - This module use for declare all the features
 */
@NgModule({
  declarations: [
  ],
  exports: [
    NavbarModule,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    EnvironmentConfigService,
    LoaderService,
  ],
})
export class CoreModule { }
