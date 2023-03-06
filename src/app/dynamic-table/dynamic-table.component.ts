import {AfterViewInit, OnInit, OnChanges, Component, ViewChild, Input, Output, ViewEncapsulation, SimpleChanges} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  @Input() customFormGroup!: FormGroup;
  @Input() content!: any[];
  @Input() headers!: any[];
  dataSource: any;
  pageSizeOptions = [3, 10, 25, 100];
  hidePageSize = false;
  genericForm!: FormGroup;
  tableDS = new MatTableDataSource<any>()
  gForm: any;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource()
  }
  
  ngOnInit() {
    this.gForm = {}

    if(this.customFormGroup) {
      this.generateForm();
    }
  }

  generateForm() {
    this.genericForm = this.customFormGroup;
    this.tableDS = new MatTableDataSource((this.genericForm.get('rows') as FormArray).controls);
    this.dataSource = this.tableDS;
    console.log('this.genericForm: ', this.genericForm)
    console.log('this.tableDS: ', this.tableDS)
  }

  ngOnChanges(changes: SimpleChanges): void {
this.generateForm();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.genericForm.get('rows'))
  }

  applyFilter(event: Event) {
    this.generateForm();
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDS = new MatTableDataSource(this.tableDS.data.filter((character: any) => 
    character.value.name.trim().toLowerCase().includes(filterValue)
  ))
  this.dataSource = this.tableDS
    if (this.dataSource.paginator) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator.firstPage();
    }
  }

  // filterCharactersList() {
  //   let filterValue = this.filterInput.nativeElement.value
  //   this.filteredList = this.charactersList.filter((character: any) => 
  //     character.name.trim().toLowerCase().includes(filterValue)
  //   )
  // }

  editRow(form: any, i: number) {
    form.get('rows').at(i).get('isEditable').patchValue(false)
  }

  saveRow(form: any, i: number) {
    form.get('rows').at(i).get('isEditable').patchValue(true)
  }

  deleteRow(form: any, i: number) {
    form.get('rows').removeAt(i);
    this.tableDS = new MatTableDataSource((this.genericForm.get('rows') as FormArray).controls); 
  }

  console(element: any){
    console.log("console: ", element)
  }

}




