/**
 * @author : Gaurang Valia
 * @class : VacancyService
 * @description : This service use for Managa vacancy Opration
 * Created Date : 20-03-2019
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// --------------------------
import { Observable } from 'rxjs/';
import { Vacancy } from '../../career/current-vacancies/vacancy-card/vacancy.model';
import { EnvironmentConfigService } from '../../core/environment-config/environment-config.service';
/**  Inject the Service Vacancy Service */
@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  /** BaseUrl of vacancy map */
  private _baseUrl: string;
  constructor(private _http: HttpClient, private _environmentConfigService: EnvironmentConfigService) {
    this._baseUrl = _environmentConfigService.getBaseUrl();
  }
  /**
   * Gets all the vacancy data form database
   * @returns all the vacancy base on Vacancy model
   */
  public getVacancy(): Observable<Vacancy[]> {
    return this._http.get<Vacancy[]>(this._baseUrl + 'Career');
  }
}
