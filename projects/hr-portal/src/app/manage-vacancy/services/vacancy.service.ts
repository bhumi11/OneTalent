/**
 * @author: Bhumi Desai
 * @created date: 20/03/2019
 * @description: In this service, http calls for adding and getting the records is performed.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { EnvironmentConfigService } from '../../core/environment-config/environment-config.service';
import { Country, Designation, Domain, Technology, Vacancy } from '../vacancy.model';

/** used for service dependency */
@Injectable({
  providedIn: 'root',
})

/**
 * @author: Bhumi Desai
 * @created date: 22/03/2019
 * @description:This service is used for http calls
 */
export class VacancyService {

  /** url for the http call */
  public baseUrl: string;
  /** url of the dropdown for http call */
  public baseUrlDropdown: string;
  constructor (private http: HttpClient, private environmentConfigService: EnvironmentConfigService) {
    this.baseUrl = environmentConfigService.getBaseUrl();
    this.baseUrlDropdown = environmentConfigService.getBaseUrlOfDropdown();
  }

  /**
   * Gets all vacancies
   * @author: Bhumi Desai
   * @created date: 22/03/2019
   * @returns all vacancies
   */
  public getAllVacancies (): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.baseUrl + '/vacancies');
  }

  /**
   * Inserts vacancies
   * @author: Bhumi Desai
   * @created date: 22/03/2019
   * @returns vacancies i.e returns the inserted records
   */
  public insertVacancies (vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(this.baseUrl + '/vacancies', vacancy);
  }

  /**
   * Gets all the domains
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   * @returns all domains
   */
  public getDomain (): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.baseUrlDropdown + '/Domains');
  }

  /**
   * Gets all the technology
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   * @returns all technology
   */
  public getTechnology (): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.baseUrlDropdown + '/Technology');
  }
  /**
   * Gets all the desigation
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   * @returns all desigation
   */
  public getDesignation (): Observable<Designation[]> {
    return this.http.get<Designation[]>(this.baseUrlDropdown + '/Designations');
  }
  /**
   * Gets all the country
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   * @returns all country
   */
  public getCountry (): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrlDropdown + '/Country');
  }

}
