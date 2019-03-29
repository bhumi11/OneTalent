/**
 * @author : Gaurang Valia
 * @class : EnvironmentConfigService
 * @description : it is use environment level config
 * Created Date : 26-03-2019
 */
import { Injectable } from '@angular/core';
// --------------------------------------- //
import { EnvironmentConfig } from './environment-config.model';
/** Injectable in EnvironmentConfigService */
@Injectable()
export class EnvironmentConfigService {
  /** Environment typeof EnvironmentConfig file */
  public environment: EnvironmentConfig;
  /** Creates an instance of environment config service */
  constructor () {
    this.environment = new EnvironmentConfig();
  }
  /**
   * Gets base url
   * @returns base url of vacancyServices
   */
  public getBaseUrl (): string {
      return this.environment.baseUrl = 'http://192.168.0.254:8011/api/';
  }
}
