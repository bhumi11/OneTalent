/**
 * @author Naim Shaikh
 * @createdDate 21-03-2019
 */
import { Component } from '@angular/core';
import { LoaderService } from './core/loader/loader.service';

/**
 * Component - This component use for decorate the class
 */
@Component({
  selector: 'one-talent-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  /**
   * Title  of app component
   */

  public title: string = 'admin-portal';
  /** loaderStatus  */
  public loaderStatus: boolean;

  /**
   * Creates an instance of app component.
   * @param loaderService inject LoaderService for display loader
   */
  constructor (private loaderService: LoaderService) {
    /**  Subscribe observable method for get loader status */
    this.loaderService.loaderStatus.subscribe((value: boolean) => {
      this.loaderStatus = value;
    });
  }

}
