import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridDataTableComponent } from './components/ag-grid-data-table/ag-grid-data-table.component';
import { MaterialDataTableComponent } from './components/material-data-table/material-data-table.component';
import { NgxDataTableComponent } from './components/ngx-data-table/ngx-data-table.component';
import { MatTablePaginationComponent } from './components/mat-table-pagination/mat-table-pagination.component';

const routes: Routes = [
  { path: 'aggrid', component: AgGridDataTableComponent, title: 'AG GRID' },
  { path: 'ngx', component: NgxDataTableComponent, title: 'NGX DATATABLE' },
  { path: 'material', component: MaterialDataTableComponent, title: 'MATERIAL' },
  { path: 'page', component: MatTablePaginationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
