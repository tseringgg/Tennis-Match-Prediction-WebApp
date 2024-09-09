import { Component } from '@angular/core';
import { MatchDataService } from '../match-data.service';
import { Config } from '../models/config-model';

@Component({
  selector: 'app-match-table',
  standalone: true,
  imports: [],
  templateUrl: './match-table.component.html',
  styleUrl: './match-table.component.scss'
})
export class MatchTableComponent {
  private matchData: Config | undefined;
  headers: any;
  constructor(private matchDataService: MatchDataService) {
    this.showMatchData();
  }
  showMatchData() {
    this.matchDataService.getMatches()
      /*.subscribe(data => this.matchData = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile,
        date: data.date,
      });*/
      //.subscribe(data => this.matchData = {...data }) // destructured assignment, to clone the data object (this was used without any options on the http.get())

      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`
        this.matchData = {...resp.body! }
        // alert(this.matchData.heroesUrl);
      })
  }
}
