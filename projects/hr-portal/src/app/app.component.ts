/**
 * @author : Bhumi Desai
 * @created date: 20/03/2019
 * @description :AppComponent is the main component
 */
import { Component } from '@angular/core';
import { LoaderService } from './core/loader/loader.service';

/**
 * This is the Component decorator.
 * Component selector, scss and html files are declared here
 */
@Component({
  selector: 'one-talent-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

/**
 * App component is the main component
 */
export class AppComponent {

  /**
   * Loader status of app component
   */
  public loaderStatus: boolean;

  constructor (private loaderService: LoaderService) {
    /** Subscribe observable method to get loader status  */
    this.loaderService.loaderStatus.subscribe((value: boolean) => {
      this.loaderStatus = value;
    });
  }

}
