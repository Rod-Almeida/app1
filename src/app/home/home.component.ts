import { XmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserData, FRUITS, NAMES} from './../interfaces/dataTable'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: any[] = ['matricula', 'name', 'progress', 'fruit'];
  users: any = [];

  constructor( ) { }

  ngOnInit(): void {
    this.users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));
  }

   createNewUser(matricula: number): any {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      matricula: matricula.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }
}
