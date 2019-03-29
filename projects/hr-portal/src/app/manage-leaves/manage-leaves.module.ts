import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './list/header/header.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './list/table/table.component';
import { ManageLeavesRoutingModule } from './manage-leaves-routing.module';

@NgModule({
  declarations: [ListComponent, HeaderComponent, TableComponent],
  imports: [
    CommonModule,
    ManageLeavesRoutingModule,
  ],
})
export class ManageLeavesModule { }
