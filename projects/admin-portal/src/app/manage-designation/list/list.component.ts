/**
 * @author Rayhan Kasli
 * @createdDate 22-03-2019
 * @description This component file is perform all oprations of designation
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

// ------------------------------------------ //
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../core/loader/loader.service';
import { DeleteDailogComponent } from '../../shared/delete-dailog/delete-dailog.component';
import { Designation, ManageDesignationModal } from '../designation.model';
import { ManageDesignationService } from '../manage-designation.service';
/**
 * This component file is used for dispaly designation list as well as add, update and delete designation
 */
@Component({
  selector: 'one-talent-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  /** addDesignationForm define the formgroup for add or update designation  */
  public addDesignationForm: FormGroup;

  /** designationList array contain all the designation data for dispaly in html */
  public designationList: Designation[];

  /** formShow define for open and close the modal for add or update designation */
  public isFormShow: boolean = false;

  /**
   * Creates an instance of list component.
   * @param manageDesignationService inject the ManageDesignationService
   * @param formBuilder inject Form Builder for to create a form group
   * @param toastr inject ToastrService for display Toastr message
   * @param dialogBox It is used to open dialogbox for delete designation
   * @param loaderService inject the LoaderService for display loader untill the data is not renderd
   */
  constructor(
    private manageDesignationService: ManageDesignationService, private formBuilder: FormBuilder,
    private toastr: ToastrService, private dialogBox: MatDialog, private loaderService: LoaderService) { }

  public ngOnInit(): void {
    this.addDesignationForm = this.formBuilder.group({
      designationId: [''],
      designationTitle: ['', Validators.compose([Validators.required, Validators.maxLength(50),
                                                 Validators.pattern('^[a-zA-Z0-9-. ]+$')])],
    });
    this.getAllDesignationList();
  }

  /**
   * designationTitle is used to put validation on designationTitle filed
   * @author Rayhan Kasli
   * @createdDate 29-03-2019
   */
  public get designationTitle (): AbstractControl {
    return this.addDesignationForm.get('designationTitle');
  }
  /**
   * getAllDesignationList is used to gell all the designations from server
   * @author Rayhan Kasli
   * @craetedDate 22-03-2019
   */
  public getAllDesignationList(): void {
    this.loaderService.displayLoader(true);
    this.manageDesignationService.getAllDesignation().subscribe((dataList: Designation[]) => {
      this.loaderService.displayLoader(false);
      this.designationList = dataList;
    },                                                          (error: HttpErrorResponse) => {
      this.errorHandler(error.status);
    });
  }

  /**
   * addDesignation method is used to add new or update existing designation
   * @author Rayhan Kasli
   * @craetedDate 25-03-2019
   */
  public addDesignation(): void {
    const designationData: Designation = this.addDesignationForm.value;
    const designationId: Designation = this.addDesignationForm.controls.designationId.value;
    if (this.addDesignationForm.invalid) {
      this.toastr.error(ManageDesignationModal.InvalidValue, ManageDesignationModal.ErrorMessage);
    } else if (designationId) {
      this.loaderService.displayLoader(true);
      const updateDesignationData: { [key: string]: number | string } = {
        designationId: designationData.designationId,
        designationTitle: designationData.designationTitle,
      };
      this.manageDesignationService.updateDesignation(updateDesignationData).subscribe(() => {
        this.isFormShow = false;
        this.getAllDesignationList();
        this.addDesignationForm.reset();
      },
                                                                                       (error: HttpErrorResponse) => {
          this.errorHandler(error.status);
        });
    } else {
      this.loaderService.displayLoader(true);
      const addNewDesignationData: { [key: string]: string } = {
        designationTitle: designationData.designationTitle,
      };
      this.manageDesignationService.createDesignation(addNewDesignationData).subscribe(() => {
        this.isFormShow = false;
        this.addDesignationForm.reset();
        this.getAllDesignationList();
      },                                                                               (error: HttpErrorResponse) => {
        this.errorHandler(error.status);
      });
    }
  }
  /**
   * editDesignation method is use to fill data into form for update
   * @param designationId it contain unique id of the designation
   * @author Rayhan Kasli
   * @createdDate 25-03-2019
   */
  public editDesignation(designationId: number): void {
    this.isFormShow = true;
    this.manageDesignationService.getDesignationById(designationId).subscribe((designation: Designation) => {
      this.addDesignationForm.controls.designationId.setValue(designation.designationId);
      this.addDesignationForm.controls.designationTitle.setValue(designation.designationTitle);
    },                                                                        (error: HttpErrorResponse) => {

      this.errorHandler(error.status);
    });
  }

  /**
   * Removes designation a per designation id
   * @param designationId it define unique id for delete designation
   * @author Rayhan Kasli
   * @createdDate 22-03-2019
   */
  public removeDesignation(designationId: number): void {
    this.loaderService.displayLoader(true);
    this.manageDesignationService.deleteDesignation(designationId).subscribe(() => {
      this.getAllDesignationList();
    },
                                                                             (error: HttpErrorResponse) => {
        this.errorHandler(error.status);
      });
  }

  /**
   * addDesignationFormShow method is use to dispaly the designation form for add new designation
   * @author Rayhan Kasli
   * @createdDate 25-03-2019
   */
  public addDesignationFormShow (): void {
    this.isFormShow = true;
  }
  /**
   * addDesignationFormHide method is use to hide the designation form
   * @author Rayhan Kasli
   * @createdDate 25-03-2019
   */
  public addDesignationFormHide (): void {
    this.addDesignationForm.reset();
    this.isFormShow = false;
  }

  /**
   * openDeleteDialog is open dialog box for delete designation
   * @param designationId contain unique id of designation
   */
  public openDeleteDialog (designationId: number): void {
    const dialogRef: MatDialogRef<DeleteDailogComponent> = this.dialogBox.open(DeleteDailogComponent, {
      data: { data: Designation },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (!!result) {
        if (result.data) {
          this.removeDesignation(designationId);
        }
      }
    });
  }

  /**
   * errorHandler handle the server error
   * @param errorCode contains error code which is throw by server
   * @author Rayhan Kasli
   * @createdDate 28-03-2019
   */
  public errorHandler (errorCode: number): void {
    if (errorCode === 404) {
      this.toastr.error(ManageDesignationModal.NotFound, ManageDesignationModal.ErrorMessage);
    } else if (errorCode === 400) {
      this.toastr.error(ManageDesignationModal.BadRequest, ManageDesignationModal.ErrorMessage);
    } else if (errorCode === 500) {
      this.toastr.error(ManageDesignationModal.InternalServerError, ManageDesignationModal.ErrorMessage);
    } else if (errorCode === 405) {
      this.toastr.error(ManageDesignationModal.MethodNotAllowed, ManageDesignationModal.ErrorMessage);
    }
    this.loaderService.displayLoader(false);
  }

}
