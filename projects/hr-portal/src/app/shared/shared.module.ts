
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** used for importing and exporting the modules */
@NgModule({
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})

/** This module is used for using all the common properties in feature module */
export class SharedModule { }
