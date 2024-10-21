import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../models/config-model';
import { Match } from '../models/match-model';

@Injectable({
  providedIn: 'root'
})

export class MatchDataService {
  //url = 'assets/test.json';
  url = 'http://localhost:5146/api/MatchRecords'
  constructor(private http: HttpClient) { 
    
  }

  getMatches() {
    let result = this.http.get<any[]>(this.url, {observe: 'response'});
    console.log(result);
    return result;
    // For HTTP Params:
    // https://v17.angular.io/guide/http-configure-http-url-parameters
    // example: api/heroes?name=cat
  }

  getMatchesBetween(player1: string, player2: string, pageSize: number, pageIndex: number) {
    //let result = this.http.get<any[]>(this.url+'/matches-between/'+player1+'/'+player2, {observe: 'response'})
    let result = this.http.get<any[]>(`${this.url}/matches-between/${player1}/${player2}?pageSize=${pageSize}&pageNumber=${pageIndex}`, {observe: 'response'})
    console.log(result);
    return result;
  }
}
