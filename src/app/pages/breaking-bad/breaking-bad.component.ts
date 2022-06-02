import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BreakingBadService } from './breaking-bad.service';

@Component({
  selector: 'app-breaking-bad',
  templateUrl: './breaking-bad.component.html',
  styleUrls: ['./breaking-bad.component.css']
})
export class BreakingBadComponent implements OnInit, AfterViewInit {
  charactersList: any[] = [];
  filteredList: any[] = []
  phones: any[] = []
  displayedColumns = ['img' ,'char_id', 'name', 'nickname', 'status', 'actions']
  headers = ['Photo' ,'Id', 'Name', 'Nickname', 'Status', 'actions']
  tableModel: any;
  @ViewChild('filterInput') filterInput!:  ElementRef
  @Output() sendTableInfo: EventEmitter<any> = new EventEmitter()

  constructor(private breakingBadService: BreakingBadService) { }

  ngOnInit(): void {
      this.getCharactersList()
  }

  ngAfterViewInit(): void {
      this.filterCharactersList()
  }

  getCharactersList() {
    this.breakingBadService.getCharactersList().subscribe((res: any) => {
      this.charactersList = res;
      this.filteredList = this.charactersList;
      this.tableModel = {
        displayColumns: this.displayedColumns,
        headers: this.headers,
        content: this.charactersList,
      }
      this.sendTableInfo.emit(this.tableModel)
    })
  }

  filterCharactersList() {
    let filterValue = this.filterInput.nativeElement.value
    this.filteredList = this.charactersList.filter((character: any) => 
      character.name.trim().toLowerCase().includes(filterValue) 
    )
  }

  delete(i: number) {
    this.filteredList.splice(i, 1)
  }
}
