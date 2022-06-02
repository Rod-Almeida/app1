import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {
  API_URL = 'https://www.breakingbadapi.com/api/'

  constructor(private http : HttpClient) { }

  getCharactersList() {
      return this.http.get(`${this.API_URL}characters/`);
  }

}
