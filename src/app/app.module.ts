import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableModalComponent } from './components/reusable-modal/reusable-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterWidgetComponent } from './components/counter-widget/counter-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AntdTestingComponent } from './components/antd-testing/antd-testing.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzImageModule } from 'ng-zorro-antd/image';
import { AgGridModule } from 'ag-grid-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgGridDataTableComponent } from './components/ag-grid-data-table/ag-grid-data-table.component';
import { NgxDataTableComponent } from './components/ngx-data-table/ngx-data-table.component';
import { MaterialDataTableComponent } from './components/material-data-table/material-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WindowWidthComponent } from './components/window-width/window-width.component';
import { MatInputModule } from '@angular/material/input';
import { MatTablePaginationComponent } from './components/mat-table-pagination/mat-table-pagination.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ReusableModalComponent,
    CounterWidgetComponent,
    AntdTestingComponent,
    AgGridDataTableComponent,
    NgxDataTableComponent,
    MaterialDataTableComponent,
    WindowWidthComponent,
    MatTablePaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzImageModule,
    AgGridModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
