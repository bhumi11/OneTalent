/**
 * @author Naim Shaikh
 * @craetedDate 28-03-2019
 * @description This file is used to display loader
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/**
 * This service class is use to display loader until the server is not response to the user
 */
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
/** An observable to toggle spinner. */
public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

/**
 * Display loader
 * @param status
 */
public displayLoader (status: boolean): void {
  this.loaderStatus.next(status);
}
}
