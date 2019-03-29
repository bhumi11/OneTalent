/**
 * @author Rayhan Kasli
 * @createdDate 22-03-2019
 * @dicription EnvironmentConfigService class is used to set service url
 */
import { Injectable } from '@angular/core';
// --------------------------------------- //
import { EnvironmentConfig } from './environment-config.model';

/**
 * Injectable - This service stands for set diffrent url
 */
@Injectable()
export class EnvironmentConfigService {
  /** environment define an instance of EnvironmentConfig class */
  public environment: EnvironmentConfig;
  constructor () {
    this.environment = new EnvironmentConfig();
  }

  /**
   * Author - Rayhan Kasli
   * @createdDate 22-03-2019
   */
  public getBaseUrl (): string {
    return this.environment.baseUrl = 'http://192.168.0.254:8014/api/';
  }

}
