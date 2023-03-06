import { XmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserData, FRUITS, NAMES} from '../../interfaces/dataTable'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: any[] = [];
  headers: any = [];
  content: any = [];
  customForm!: FormGroup;

  constructor( ) { }

  ngOnInit(): void {
    this.createTableContent(this.content)
  }

  createTableContent(tableInfo: any) {
    console.log('tableInfo: ', tableInfo)
    this.displayedColumns = tableInfo.displayColumns,
    this.headers = tableInfo.headers,
    this.content = tableInfo.content;
  }

  createForm(event: FormGroup) {
    this.customForm = event;
    console.log('createFormEvent', event)
  }


}
