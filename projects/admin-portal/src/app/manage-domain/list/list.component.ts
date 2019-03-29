/**
 * @author - Naim Shaikh
 * @createDate 22-03-2019
 * @description - This component file are List out the Domain.
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs/';
import { LoaderService } from '../../core/loader/loader.service';
// -------------------------------------------------
import { Domain, ManageDomainModal } from '../domain.model';
import { ManageDomainService } from '../manage-domain.service';
import { DeleteDailogComponent } from './../../shared/delete-dailog/delete-dailog.component';

/**
 * Component - This component use for decorate the class
 */
@Component({
  selector: 'one-talent-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  /** domainListForm use for Formgroup  */
  public domainListForm: FormGroup;

  /** domainlist use for Domain */
  public domainList: Domain[];

  /** Determines whether show is */
  public isShow: boolean = false;
  /**
   *  inject the service.
   * @param domainService - for domain service
   * @param formBuilder - for usnig form builder in reactive forms
   * @param toastr - for using tostr message
   * @param dialog - for using dialog box
   * @param loaderService - for display loader
   */
  constructor(
    private domainService: ManageDomainService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private loaderService: LoaderService,
  ) {

  }

  /**
   *  load the Domian using ngOnInit method
   */
  public ngOnInit(): void {
    this.domainListForm = this.formBuilder.group({
      description: ['', Validators.maxLength(200)],
      domainId: [],
      domainName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],

    });
    this.getAllDomainList();
  }

  /**
   * domainValidation is used to put validation on domain form
   */
  // tslint:disable-next-line:typedef
  public get domainValidation () {
    return this.domainListForm.controls;
  }

  /**
   * Get all the Domain
   * @param  - Get domain form get getAllDomainList method
   */
  public getAllDomainList (): void {
    this.loaderService.displayLoader(true);
    this.domainService.getAllDomainList().subscribe((data: Domain[]) => {
      this.loaderService.displayLoader(false);
      this.domainList = data;
    },
                                                    (error: HttpErrorResponse) => {
        this.errorHandler(error.status);
      });
  }
  /**
   * First of fall check the form is valid after then perform create or update
   * when user submit the create buttton then add new record on server
   * when user submit the upadte  button then upadte existing record on the server
   */
  public addDomain(): void {
    const domainData: Domain = this.domainListForm.value;
    const domainId: Domain = this.domainListForm.controls.domainId.value;

    if (this.domainListForm.invalid) {
      this.toastr.error(ManageDomainModal.InvalidValue, ManageDomainModal.ErrorMessage);
    } else if (!!domainId) {
      this.loaderService.displayLoader(true);
      const updateDomainData: { [key: string]: string } = {
        description: domainData.description,
        domainName: domainData.domainName,
      };
      this.domainService.updateDomain(updateDomainData, domainData.domainId).subscribe(() => {
        this.isShow = false;
        this.getAllDomainList();
        this.domainListForm.reset();
      },
                                                                                       (error: HttpErrorResponse) => {
          this.errorHandler(error.status);
        });

    } else {
      this.loaderService.displayLoader(true);
      const addNewDomainData: { [key: string]: string } = {
        description: domainData.description,
        domainName: domainData.domainName,
      };
      this.domainService.createDomain(addNewDomainData).subscribe(() => {
        this.isShow = false;
        this.domainListForm.reset();
        this.getAllDomainList();
      },                                                          (error: HttpErrorResponse) => {
        this.errorHandler(error.status);
      });
    }

  }
  /**
   * Loads domain to edit
   * @param domain - upadet record using domain
   */
  public editDomainById (domainId: number): void {
    this.isShow = true;

    this.domainService.getDomainListById(domainId).subscribe((doamin: Domain) => {

      this.domainListForm.controls.domainId.setValue(doamin.domainId);
      this.domainListForm.controls.domainName.setValue(doamin.domainName);
      this.domainListForm.controls.description.setValue(doamin.description);
    },                                                       (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }
  /**
   * Deletes order
   * @param deleteId - Delete record using delete id
   */
  public deleteDomainById (domainId: number): void {
    this.loaderService.displayLoader(true);
    this.domainService.deleteDomainById(domainId).subscribe(() => {
      this.getAllDomainList();
    },
                                                            (error: HttpErrorResponse) => {
        this.errorHandler(error.status);
      });
  }

  /**
   * AddDomainShowForm method use for adding data
   */
  public addDomainShowForm (): void {
    this.isShow = true;
  }
  /**
   * AddDomainHideForm method use for hide form
   */
  public addDomainHideForm (): void {
    this.isShow = false;
    this.domainListForm.reset();
  }

  /**
   * openDeleteDialog box for delete domain
   * @param domainId contain unique id for delete domain
   */
  public openDeleteDialog (domainId: number): void {
    const dialogRef: MatDialogRef<DeleteDailogComponent> = this.dialog.open(DeleteDailogComponent, {
      data: { data: Domain },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (!!result) {
        if (result.data) {
          this.deleteDomainById(domainId);
        }
      }
    });
  }

  /**
   * errorHandler handle the server error
   * @param errorCode contains error code which is throw by server
   */
  public errorHandler (errorCode: number): void {
    if (errorCode === 404) {
      this.toastr.error(ManageDomainModal.NotFound, ManageDomainModal.ErrorMessage);
    } else if (errorCode === 400) {
      this.toastr.error(ManageDomainModal.BadRequest, ManageDomainModal.ErrorMessage);
    } else if (errorCode === 500) {
      this.toastr.error(ManageDomainModal.InternalServerError, ManageDomainModal.ErrorMessage);
    } else if (errorCode === 405) {
      this.toastr.error(ManageDomainModal.MethodNotAllowed, ManageDomainModal.ErrorMessage);
    }
    this.loaderService.displayLoader(false);
  }

}
