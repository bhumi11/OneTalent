/**
 * @author : Gaurang Valia
 * @class : SharedModule
 * @description : is shared the all the feature module and core module
 * Created Data : 20-03-2019
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { VacancyService } from './services/vacancy.service';
/** Ng module used to declarations, import , export, provide service of VacancyService */
@NgModule({
  declarations: [BannerComponent],
  exports: [
    BannerComponent,
    CommonModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [VacancyService],
})
// Export SharedModule
export class SharedModule { }
