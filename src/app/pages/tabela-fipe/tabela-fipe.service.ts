import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabelaFipeService {

  constructor(
    private http : HttpClient
  ) { }

  API_URL = 'https://parallelum.com.br/fipe/api/v1'

  getTabelaFipe() {
    return this.http.get(`${this.API_URL}/carros/marcas`);
}


}
