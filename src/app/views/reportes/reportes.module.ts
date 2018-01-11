import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatProgressBarModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonPipesModule } from "../../pipes/common/common-pipes.module";

import { ReportesComponent } from './reportes.component';
import { ReportesRoutes } from "./reportes.routing";
import {SidebarComponent} from '../../components/reports/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule,
    NgxDatatableModule,
    CommonPipesModule,
    RouterModule.forChild(ReportesRoutes)
  ],
  declarations: [ReportesComponent,SidebarComponent],
  exports: []
})
export class ReportesModule {

}
