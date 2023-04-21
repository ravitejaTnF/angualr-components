import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table-pagination',
  templateUrl: './mat-table-pagination.component.html',
  styleUrls: ['./mat-table-pagination.component.css']
})
export class MatTablePaginationComponent implements OnInit {

  displayedColumns: string[] = ['id','name','tagline','first-brewed'];
  dataSource!: MatTableDataSource<any>;
  filteredDataAvailable:boolean = true;
  apiData:any[] =[];
  totalRecords:number = 100;
  pagination = {
    page:1,
    pageSize:10
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http:HttpClient) {}

  ngOnInit(){
    this.apiData = [];
    this.getchData();
  }

  getchData(){
    this.http.get<any>(`https://api.punkapi.com/v2/beers?page=${this.pagination.page}&per_page=${this.pagination.pageSize}`)
    .subscribe((res:any) => {
      //this.totalRecords = res.length;
      this.apiData = res;
      this.dataSource = new MatTableDataSource(this.apiData);
    })
  }

  //Assigning pagination and sorting after the page has completely loaded.  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //For filtering the data based on search box.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    }
    this.filteredDataAvailable = this.dataSource.filteredData.length > 0 ? true : false;
    //console.log(this.dataSource.filteredData);
  }

  //page change handler
  onPageChange(event:any){
    this.pagination.page = event.pageIndex+1;
    this.pagination.pageSize = event.pageSize;
    console.log(this.pagination);
    this.getchData();
  }
  //when page-size from dropdown has changed.
  onPageSizeChanged(event:any){
    this.pagination.page = 1;
    this.pagination.pageSize = event.pageSize;
    this.getchData();
  }

}
