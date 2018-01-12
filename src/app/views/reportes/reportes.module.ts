import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatProgressBarModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatGridListModule,MatInputModule,
  MatDialogModule,
  MatToolbarModule
} from '@angular/material';
import { AppConfirmModule } from '../../services/app-confirm/app-confirm.module';
import { AppLoaderModule } from '../../services/app-loader/app-loader.module';

import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CommonPipesModule} from '../../pipes/common/common-pipes.module';

import {ReportesComponent} from './reportes.component';
import {ReportesRoutes} from './reportes.routing';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    HttpClientModule,
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule.forChild(ReportesRoutes)
  ],
  declarations: [ReportesComponent, SidebarComponent, FiltersComponent],
})
export class ReportesModule {

}
