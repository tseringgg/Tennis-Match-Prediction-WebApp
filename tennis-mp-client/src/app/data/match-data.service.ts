import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
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
    if (true) {
      console.log('Returning mock matches in production');
      let result = of(({ 
        body: MOCK_MATCHES, 
        headers: { keys: () => [] } 
      } as any) as import('@angular/common/http').HttpResponse<any[]>);
      return result;
    }
    let result = this.http.get<any[]>(this.url, { observe: 'response' });
    console.log(result);
    return result;
  }

  getMatchesBetween(player1: string, player2: string, pageSize: number, pageIndex: number) {
    if (true) {
      console.log('Returning mock matches between players in production'); 
      let responseBody = MOCK_MATCHES.filter(match => 
        (match.p0_name === player1 && match.p1_name === player2) || 
        (match.p0_name === player2 && match.p1_name === player1)
      ).slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

      let result = of(({ 
        body: responseBody, 
        headers: { keys: () => [] } 
      } as any) as import('@angular/common/http').HttpResponse<any[]>);
      
      return result;
    }
    let result = this.http.get<any[]>(`${this.url}/matches-between/${player1}/${player2}?pageSize=${pageSize}&pageNumber=${pageIndex}`, { observe: 'response' });
    console.log(result);
    return result;
  }
}
