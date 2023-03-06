import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  headers = ['img' ,'char_id', 'name', 'nickname', 'status', 'actions']
  tableModel: any;
  characterForm: FormGroup | undefined;
  @ViewChild('filterInput') filterInput!:  ElementRef
  @Output() sendTableInfo: EventEmitter<any> = new EventEmitter()
  @Output() sendFormInfo: EventEmitter<any> = new EventEmitter()

  constructor(
    private breakingBadService: BreakingBadService,
    private router: Router,
    private formBuilder: FormBuilder,
    // private formGroup: FormGroup,
    ) { }

  ngOnInit(): void {
      this.characterForm;
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
      this.sendTableInfo.emit(this.tableModel);
      this.generateForm()
    })
  }

  filterCharactersList() {
    let filterValue = this.filterInput.nativeElement.value
    this.filteredList = this.charactersList.filter((character: any) => 
      character.name.trim().toLowerCase().includes(filterValue)
    )
  }

  generateForm() {
    this.characterForm = this.formBuilder.group({
      rows: this.formBuilder.array(this.charactersList.map( character => this.formBuilder.group({
        img: new FormControl(character.img),
        char_id: new FormControl(character.char_id),
        name: new FormControl(character.name),
        nickname: new FormControl(character.nickname),
        status: new FormControl(character.status),
        isEditable: new FormControl(true),
        })
      ))
    })
    this.sendFormInfo.emit(this.characterForm);
  }

  delete(i: number) {
    this.filteredList.splice(i, 1)
  }

  goToDetails(i: number){
    localStorage.setItem('detalhes: ' , this.filteredList[i]) 
    this.router.navigate(['\details'])
  }
}
