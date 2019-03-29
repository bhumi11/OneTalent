/**
 * @author : Bhumi Desai
 * @created date: 20/03/2019
 * @class : AppModule
 * @description : All the modules of the application are imported here.
 */

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

/**
 * used for declarations, import, export, provide service and also bootstrap
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
})

/**
 * All the modules of the application are imported here
 */
export class AppModule { }
