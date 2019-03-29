/**
 * @author - Naim Shaikh
 * @createdDate 27-03-2019
 * @description - This file is use to close and delete dialog box.
 */

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

/**
 * This component file is use to close and delete dialog box.
 */
@Component({
  selector: 'one-talent-delete-dailog',
  styleUrls: ['./delete-dailog.component.scss'],
  templateUrl: './delete-dailog.component.html',
})
export class DeleteDailogComponent {

  constructor (
    public dialogRef: MatDialogRef<DeleteDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) { }

  /**
   * closeDeleteDialog close delete dialog box
   */
  public closeDeleteDialog (): void {
    this.dialogRef.close({ data: false });

  }
  /**
   * deleteData delete data
   */
  public deleteData (): void {
    this.dialogRef.close({ data: true });
  }

}
