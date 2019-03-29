import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
/**
 * An observable to toggle spinner.
 */
public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
constructor () {}

/**
 * Displays loader
 * @param status : boolean 
 */
public displayLoader (status: boolean): void {
  this.loaderStatus.next(status);
}
}
