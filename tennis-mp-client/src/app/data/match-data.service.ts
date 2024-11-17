import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MOCK_MATCHES } from './mock-matches';
import { Match } from '../models/match-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MatchDataService {
  url = 'http://localhost:5146/api/MatchRecords';
  
  constructor(private http: HttpClient) { }

  getMatches() {
    if (environment.production) {
      console.log('Returning mock matches in production');
      let result = of(({ body: MOCK_MATCHES, headers: {} } as any) as any as import('@angular/common/http').HttpResponse<any[]>);
      return result;
    }
    let result = this.http.get<any[]>(this.url, { observe: 'response' });
    console.log(result);
    return result;
  }

  getMatchesBetween(player1: string, player2: string, pageSize: number, pageIndex: number) {
    if (environment.production) {
      console.log('Returning mock matches between players in production');
      let filteredMatches = MOCK_MATCHES.filter(match => 
        (match.p0_name === player1 && match.p1_name === player2) || 
        (match.p0_name === player2 && match.p1_name === player1)
      );
      let result = of(({ body: filteredMatches, headers: {} } as any) as any as import('@angular/common/http').HttpResponse<any[]>);
      return result;
    }
    let result = this.http.get<any[]>(`${this.url}/matches-between/${player1}/${player2}?pageSize=${pageSize}&pageNumber=${pageIndex}`, { observe: 'response' });
    console.log(result);
    return result;
  }
}
