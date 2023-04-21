import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Component({
  selector: 'app-material-data-table',
  templateUrl: './material-data-table.component.html',
  styleUrls: ['./material-data-table.component.css']
})
export class MaterialDataTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name','tagline','first-brewed'];
  dataSource!: MatTableDataSource<any>;
  filteredDataAvailable:boolean = true;
  apiData:any[] =[];
  currentPage = 1;
  pagesize = 10;
  pageOffset = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http:HttpClient) {
    
  }
  ngOnInit(){
    //this.dataSource = new MatTableDataSource(this.logsdata);
    // this.apiData = [];
    // this.http.get<any>("http://jsonplaceholder.typicode.com/posts")
    // .subscribe((res:any) => {
    //   this.apiData = res;
    //   this.dataSource = new MatTableDataSource(this.apiData);
    // })
    this.apiData = [];
    this.http.get<any>(`https://api.punkapi.com/v2/beers?page=${this.currentPage}&per_page=30`)
    .subscribe((res:any) => {
      this.apiData = res;
      this.dataSource = new MatTableDataSource(this.apiData.slice(this.pageOffset,this.pagesize));
    })
  }
  //Assigning pagination and sorting after the page has completely loaded.  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterRows(event:any){
    
  }

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
  onPageChange(event:any){
    this.currentPage = event.pageIndex;
    console.log("current page",this.currentPage);
    this.dataSource = new MatTableDataSource(this.apiData.slice(this.currentPage * this.pagesize,this.currentPage+2 * 10));
    console.log(this.currentPage * this.pagesize,this.currentPage+1 * 10);
  }
}

