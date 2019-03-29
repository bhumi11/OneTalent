import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageTechnologyRoutingModule } from './manage-technology-routing.module';
import { ListComponent } from './list/list.component';
import { OverlayModalComponent } from './overlay-modal/overlay-modal.component';
import { HeaderComponent } from './list/header/header.component';
import { TableComponent } from './list/table/table.component';

@NgModule({
  declarations: [ListComponent, OverlayModalComponent, HeaderComponent, TableComponent],
  imports: [
    CommonModule,
    ManageTechnologyRoutingModule
  ]
})
export class ManageTechnologyModule { }
