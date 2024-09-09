import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './models/config-model';

@Injectable({
  providedIn: 'root'
})

export class MatchDataService {
  url = 'assets/test.json';
  constructor(private http: HttpClient) { 
    
  }

  getMatches() {
    return this.http.get<Config>(
      this.url, {observe: 'response'});

    // For HTTP Params:
    // https://v17.angular.io/guide/http-configure-http-url-parameters
    // example: api/heroes?name=cat
  }
}
