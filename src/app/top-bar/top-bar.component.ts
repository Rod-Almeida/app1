import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() drawerToggle = new EventEmitter();
  drawer = false

  constructor() { }

  
  ngOnInit(): void {
  }

  drawerTogle(){
    this.drawer = !this.drawer
    this.drawerToggle.emit(this.drawer)
  }

}
