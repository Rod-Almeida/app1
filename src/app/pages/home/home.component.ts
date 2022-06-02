import { XmlParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor( ) { }

  ngOnInit(): void {
    // this.users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));
    this.createTableContent(this.content)
  }

  createTableContent(tableInfo: any) {
    console.log('tableInfo: ', tableInfo)
    this.displayedColumns = tableInfo.displayColumns,
    this.headers = tableInfo.headers,
    this.content = tableInfo.content;
  }

  //  createNewUser(matricula: number): any {
  //   const name =
  //     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
  //     ' ' +
  //     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
  //     '.';
  
  //   return {
  //     matricula: matricula.toString(),
  //     name: name,
  //     progress: Math.round(Math.random() * 100).toString(),
  //     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  //   };
  // }
}
