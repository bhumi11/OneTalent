/**
 * @author : Gaurang Valia
 * @class : VacancyCardComponent
 * @description: this component is use for the display vacancy Cards and check the available vacancies
 * Created Date : 25-03-2019
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fadeInRightOnEnterAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../../core/loader/loader.service';
import { VacancyService } from '../../../shared/services/vacancy.service';
import { Vacancy, VacancyModel } from './vacancy.model';
/**
 * This is the Component decorator.
 * Component selector, scss, animation and html files are declared here
 */
@Component({
  animations: [
    fadeInRightOnEnterAnimation({ anchor: 'fadeInRight' }),
    fadeInUpOnEnterAnimation({ anchor: 'fadeInLeft' }),
  ],
  selector: 'one-talent-vacancy-card',
  styleUrls: ['./vacancy-card.component.scss'],
  templateUrl: './vacancy-card.component.html',
})
/**  Display vacancy Cards */
export class VacancyCardComponent implements OnInit {
  /** LoadedCounter: it will count the array length */
  public loadedCounter: number = 0;
  /**  PrevLoaddedCounter: previous vacancy count */
  public prevLoaddedCounter: number = 0;
  /** IsNextAvailable: check the next click Button is available or not */
  public isNextAvailable: boolean = true;
  /** IsPrevAvailable: check the previous click Button is available or not */
  public isPrevAvailable: boolean = false;
  /**  Diplay vacancies of vacancy card component is use to display the dom side all vacancies */
  public diplayVacancies: Vacancy[];
  /** vacancies array of the vacancies */
  public vacancies: Vacancy[];
  /**
   * Creates an instance of vacancy card component.
   * @param _service: refernce of VacancyService and is use to call all the service method
   */
  constructor(private _service: VacancyService, private _toastr: ToastrService, private _loaderService: LoaderService) { }
  /**
   * Oninit call the displayVacancy()
   * @author : Gaurang Valia
   * Created Date : 25-03-2019
   */
  public ngOnInit (): void {
    this.displayVacancy();
  }
  /**
   * DisplayVacancy() is subscribe the getVacancy() and fetch the response also is call the nextVacancyload() method
   * @author : Gaurang Valia
   * Created Date : 25-03-2019
   */
  public displayVacancy (): void {
    this._loaderService.displayLoader(true);
    this._service.getVacancy().subscribe((response: Vacancy[]) => {
      this.vacancies = response;
      this._loaderService.displayLoader(false);
      this.nextVacancyLoad();
    },
                                         (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this._toastr.error(VacancyModel.InvalidValue, VacancyModel.ErrorMessage);
        } else if (error.status === 500) {
          this._toastr.error(VacancyModel.InternalError, VacancyModel.ErrorMessage);
        }
      });
  }
  /**
   * nextVacancyLoad() is display the next 3 vacancy of Vacancies
   * @author : Gaurang Valia
   * Created Date : 26-03-2019
   */
  public nextVacancyLoad (): void {
    if (this.isNextAvailable) {
      this.isPrevAvailable = true;
      this.prevLoaddedCounter = this.loadedCounter;
      if (this.vacancies.length < 3) {
        this.loadedCounter = this.vacancies.length;
      } else {
        this.loadedCounter += 3;
      }
      if (this.loadedCounter > this.vacancies.length) {
        this.loadedCounter = this.vacancies.length;
        this.isNextAvailable = false;
      }
      this.diplayVacancies = [];
      for (let index: number = this.prevLoaddedCounter; index < this.loadedCounter; index++) {
        const element: Vacancy = this.vacancies[index];
        this.diplayVacancies.push(element);
      }
    }
  }
  /**
   * prevVacancyLoad() is display the previous 3 vacancy of Vacancies
   * @author : Gaurang Valia
   * Created Date : 26-03-2019
   */
  public prevVacancyLoad(): void {
    if (this.isPrevAvailable) {
      this.isNextAvailable = true;
      this.prevLoaddedCounter = this.loadedCounter;
      this.loadedCounter -= 3;
      if (this.loadedCounter < 0) {
        this.loadedCounter = 0;
        this.isPrevAvailable = false;
      }
      this.diplayVacancies = [];
      for (let index: number = this.loadedCounter; index < this.prevLoaddedCounter; index++) {
        const element: Vacancy = this.vacancies[index];
        this.diplayVacancies.push(element);
      }
    }
  }
}
