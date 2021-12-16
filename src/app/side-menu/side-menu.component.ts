import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit, OnChanges {
 @ViewChild('drawer') drawer!: any; 
 @Input() drawerValue = false;

  constructor(
    
  ) { }
  showFiller: boolean = false;


  ngOnInit(): void {
    this.showFiller = false;
  }

  ngOnChanges(){
    this.drawerValue? this.drawer.opened = true : this.drawer.opened = false;
  }

}
