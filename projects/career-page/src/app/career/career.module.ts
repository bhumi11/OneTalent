/**
 * @author : Gaurang Valia
 * @class : CareerModule
 * @description : is import the all the child component in career module
 * Created Date : 20-03-2019
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { CultureComponent } from './culture/culture.component';
import { DetailsComponent } from './culture/details/details.component';
import { EventsComponent } from './culture/events/events.component';
import { CurrentVacanciesComponent } from './current-vacancies/current-vacancies.component';
import { MapComponent } from './current-vacancies/map/map.component';
import { OpenPositionsComponent } from './current-vacancies/open-positions/open-positions.component';
import { RecruitmentStatusComponent } from './current-vacancies/recruitment-status/recruitment-status.component';
import { VacancyCardComponent } from './current-vacancies/vacancy-card/vacancy-card.component';
import { EmployeeVerficationComponent } from './employee-verfication/employee-verfication.component';
/**
 * Used for declarations CareerComponent CultureComponent DetailsComponent EventsComponent CurrentVacanciesComponent
 * MapComponent OpenPositionsComponent VacancyCardComponent RecruitmentStatusComponent EmployeeVerficationComponent
 * imports the CareerRoutingModule SharedModule, export, provide service and also bootstrap
 */
@NgModule({
  declarations: [
    CareerComponent,
    CultureComponent,
    DetailsComponent,
    EventsComponent,
    CurrentVacanciesComponent,
    MapComponent,
    OpenPositionsComponent,
    VacancyCardComponent,
    RecruitmentStatusComponent,
    EmployeeVerficationComponent,
  ],
  exports: [
    CareerComponent,
  ],
  imports: [
    CareerRoutingModule,
    SharedModule,
  ],
})
// Export the CareerModule
export class CareerModule { }
