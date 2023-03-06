import { Component, OnInit } from '@angular/core';
import { TabelaFipeService } from './tabela-fipe.service';

@Component({
  selector: 'app-tabela-fipe',
  templateUrl: './tabela-fipe.component.html',
  styleUrls: ['./tabela-fipe.component.css']
})
export class TabelaFipeComponent implements OnInit {

  constructor(
    private tabelaFipeService: TabelaFipeService
  ) { }

  ngOnInit(): void {
    this.getTabelaFipeCarros();
  }

  getTabelaFipeCarros() {
    this.tabelaFipeService.getTabelaFipe().subscribe( (res:any) =>
      console.log('Tabela Fipe:', res)
    )
  }

}
