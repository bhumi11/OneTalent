import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/** used for service dependency */
@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  /**
   *  BehaviorSubject for toggle spinner.
   */
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * Displays loader
   * @param status: emits the boolean value
   */
  public displayLoader (status: boolean): void {
    this.loaderStatus.next(status);
  }
}
