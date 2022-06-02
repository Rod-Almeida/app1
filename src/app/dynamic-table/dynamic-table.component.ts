import {AfterViewInit, OnInit, OnChanges, Component, ViewChild, Input, Output, ViewEncapsulation, SimpleChanges} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData, FRUITS, NAMES} from './../interfaces/dataTable'


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() displayedColumns!: any[];
  @Input() content!: any[];
  @Input() headers!: any[];
  dataSource: any;
  pageSizeOptions = [3, 10, 25, 100];
  hidePageSize = false;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();

  }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.content);
    console.log('this.content: ', this.content)

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




