/**
 * @author: Bhumi Desai
 * @created date: 20/03/2019
 * @description: In this component file, the logic of getting all the records is done
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../core/loader/loader.service';
import { VacancyService } from '../services/vacancy.service';
import {
  Country, Designation, Domain, Technology,
  ToastrErrorMessage, ToastrErrorStatus204, ToastrErrorStatus400, ToastrErrorStatus401,
  ToastrErrorStatus404, ToastrErrorStatus500, ToastrSuccessMessage, Vacancy,
} from '../vacancy.model';
import { Validatecharacters, ValidateNumberAndPlus, ValidateOnlyNumber } from '../validators/form.validator';

/**
 * This is the Component decorator.
 * Component selector, scss adn html files are declared here
 */
@Component({
  selector: 'one-talent-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
})

/**
 * @author: Bhumi Desai
 * @created date: 22/03/2019
 * @description:ListComponent component to display and insert vacancy
 */
export class ListComponent implements OnInit {

  /**
   * all the records will be stored in this variable.
   * this variable will be used in template to display the records.
   */
  public vacancies: Vacancy[] = [];

  /** vacancyForm is the FormGroup */
  public vacancyForm: FormGroup;

  /** vacancyForm is the FormGroup */
  public show: boolean = false;

  /** Determines whether form is submitted or not */
  public isSubmitted: boolean = false;

  /** Domain for the dropdown */
  public domain: Domain[];
  /** Technology for the dropdown */
  public technology: Technology[];
  /** Designation for the dropdown */
  public designation: Designation[];
  /** Country for the dropdown */
  public country: Country[];

  constructor (private fb: FormBuilder,
               private loaderService: LoaderService,
               private vacancyService: VacancyService,
               private toastr: ToastrService) { }

  /**
   * on init, formcontrols are initialised and getAllVacancies method to display the list is called
   */
  public ngOnInit (): void {

    this.vacancyForm = this.fb.group({
      countryId: ['', Validators.required],
      designationId: ['', Validators.required],
      domainId: ['', Validators.required],
      experience: ['', Validators.compose([Validators.required, ValidateNumberAndPlus])],
      jobDescription: ['', Validators.required],
      jobName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30), Validatecharacters])],
      responsibilities: ['', Validators.required],
      technologyId: ['', Validators.required],
      vacancies: ['', Validators.compose([Validators.required, ValidateOnlyNumber])],
    });
    this.getAllVacancies();

  }

  /**
   * Gets all the form controls.
   */

  public get formControls () {
    return this.vacancyForm.controls;
  }

  /**
   * Gets all the vacancies for displaying the list
   * @author: Bhumi Desai
   * @created date: 22/03/2019
   */
  public getAllVacancies (): void {
    this.loaderService.displayLoader(true);

    this.vacancyService.getAllVacancies().subscribe((response: Vacancy[]) => {
      this.vacancies = response;
      this.loaderService.displayLoader(false);
    },                                              (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }
  /**
   * Gets all the domain for displaying the dropdown
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   */
  public getDomain (): void {
    this.loaderService.displayLoader(true);
    this.vacancyService.getDomain().subscribe((response: Domain[]) => {
      this.domain = response;
      this.getTechnology();

    },                                        (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }

  /**
   * Gets all the technology for displaying the dropdown
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   */
  public getTechnology (): void {
    this.vacancyService.getTechnology().subscribe((response: Technology[]) => {
      this.technology = response;
      this.getDesignation();

    },
                                                  (error: HttpErrorResponse) => {

       this.errorHandler(error.status);
      });
  }

  /**
   * Gets all the designation for displaying the dropdown
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   */
  public getDesignation (): void {
    this.vacancyService.getDesignation().subscribe((response: Designation[]) => {
      this.designation = response;
      this.getCountry();
    },                                             (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }

  /**
   * Gets all the country for displaying the dropdown
   * @author: Bhumi Desai
   * @created date: 27/03/2019
   */
  public getCountry (): void {
    this.vacancyService.getCountry().subscribe((response: Country[]) => {
      this.country = response;
      this.loaderService.displayLoader(false);
    },                                         (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }

  /**
   * calls the api when the form is opened
   * @author: Bhumi Desai
   * @created date: 28/03/2019
   */
  public loadDropDown (): void {
    if (this.show) {
      this.getDomain();
    }
  }

  /**
   * logic of inserting the records is performed
   * @author: Bhumi Desai
   * @created date: 22/03/2019
   */
  public onSubmit (): void {
    this.isSubmitted = true;
    if (this .vacancyForm.invalid) {
      this.toastr.error(ToastrErrorMessage.Message, ToastrErrorMessage.MessageType);
      return;
    }
    this.vacancyService.insertVacancies(this.vacancyForm.value).subscribe((response: Vacancy) => {
      this.show = false;
      this.toastr.success(ToastrSuccessMessage.Message, ToastrSuccessMessage.MessageType);
      this.getAllVacancies();
      this.clearAll();
    },                                                                    (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }

  /**
   * Opens the modal form
   * @author: Bhumi Desai
   * @created date: 25/03/2019
   */
  public openModalForm (): void {
    this.show = true;
    this.loadDropDown();
  }

  /**
   * Closes the modal form
   * @author: Bhumi Desai
   * @created date: 25/03/2019
   */
  public closeModalForm (): void {
    this.clearAll();
    this.show = false;
  }

  /**
   * Clears all the form fields
   * @author: Bhumi Desai
   * @created date: 25/03/2019
   */
  public clearAll (): void {
    this.vacancyForm.reset();
  }

  /**
   * Error handler method for error status
   */
  public errorHandler (errorCode: number): void {
    if (errorCode === 404) {
      this.toastr.error(ToastrErrorStatus404.Message, ToastrErrorStatus404.MessageType);
    } else if (errorCode === 204) {
      this.toastr.error(ToastrErrorStatus204.Message, ToastrErrorStatus204.MessageType);
    } else if (errorCode === 400) {
      this.toastr.error(ToastrErrorStatus400.Message, ToastrErrorStatus400.MessageType);
    } else if (errorCode === 401) {
      this.toastr.error(ToastrErrorStatus401.Message, ToastrErrorStatus401.MessageType);
    } else if (errorCode === 500) {
      this.toastr.error(ToastrErrorStatus500.Message, ToastrErrorStatus500.MessageType);
    }
    this.loaderService.displayLoader(false);
  }

}
