import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  title = 'app1';
  drawer: any;
 
  drawerToggle(event: any){
    
    this.drawer = event
    console.log('drawer: ', this.drawer)
  }

  OnChanges(){
    this.drawerToggle(this.drawer);
  }


}
