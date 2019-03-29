/**
 * @author : Gaurang Valia
 * @class : AppModule
 * @description : app level import app component,animation module,toastr module and all the module
 * Created Date : 20-03-2019
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
/**
 * Use to imports AppRoutingModule,BrowserAnimationsModule,BrowserModule,
 * CoreModule,SharedModule,ToastrModule.forRoot()
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
    SharedModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
})
// Export AppModule
export class AppModule { }
