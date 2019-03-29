/**
 * @author - Naim Shaikh
 * @createdDate 22-03-2019  
 * @description - This service file are communication between component to server.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { EnvironmentConfigService } from '../core/environment-config/environment-config.service';
// -------------------------------------------------
import { Domain } from './domain.model';

/**
 * Injectable - This is use for createing service
 */
@Injectable({
  providedIn: 'root',
})
export class ManageDomainService {

  /** Declare the URL variable for server */
  public serviceUrl: string;

  /**
   * Creates an instance of manage designation service.
   * @param httpClient inject HttpClient class to interact with server
   * @param environmentConfigService inject environmentConfigService class for  interact with server
   */
  constructor(private http: HttpClient,
    private environmentConfigService: EnvironmentConfigService) {
    this.serviceUrl = environmentConfigService.getBaseUrl();
  }

  /** getAllDomain method are get all domain details from the server */
  public getAllDomainList(): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.serviceUrl + 'Domains');
  }

  /**
   * Gets all domain list by id
   * @param domainId - get the domain data by id
   *
   */
  public getDomainListById(domainId: number): Observable<Domain> {
    return this.http.get<Domain>(this.serviceUrl + 'Domains/' + domainId);
  }

  /**
   * CreatesDomain method are add new domain in the server
   * @param domain  - get the domain data
   */
  public createDomain(domainData: { [key: string]: string }): Observable<Domain> {
    return this.http.post<Domain>(this.serviceUrl + 'Domains', domainData);
  }
  /**
   * updateDomain method are update the domain deatils on server
   * @param domain - get update deatils as per domain
   */
  public updateDomain(domain: { [key: string]: any }, domainId: number): Observable<Domain> {
    return this.http.put<Domain>(this.serviceUrl + 'Domains/' + domainId, domain);
  }
  /**
   * deleteDomainById method are used for delete the record from order
   * @param domainId - delete the record as per domain id
   */
  public deleteDomainById(domainId: number): Observable<Domain> {
    return this.http.delete<Domain>(this.serviceUrl + 'Domains/' + domainId);
  }

}
