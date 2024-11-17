import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import { merge, Observable, of } from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatchDataService } from '../data/match-data.service';
import { Match } from '../models/match-model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, MatSortHeader } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table' 

@Component({
  selector: 'app-match-lookup',
  standalone: true,
  imports: [
      FormsModule, 
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatInputModule,
      MatFormFieldModule,
      AsyncPipe,
      CommonModule,
      MatProgressSpinnerModule,
      MatTableModule,
      MatPaginator,
      MatSort, MatSortModule, MatSortHeader
    ],
  templateUrl: './match-lookup.component.html',
  styleUrl: './match-lookup.component.scss'
})
export class MatchLookupComponent implements OnInit {
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20, 50];
  pageIndex: number;
  showPageSizeOptions = true;
  resultsLength = 0;

  myControl1 = new FormControl('');
  myControl2 = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions1: Observable<string[]>;
  filteredOptions2: Observable<string[]>;
  
  playerForm: FormGroup;
  players: string[] = ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic']; // Add your players here
  matches: Match[];

  displayedColumns: string[] = ['p0_name', 'p1_name', 'score', 'tny_date'];

  
  isLoadingResults = true;
  isRateLimitReached = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageEvent: PageEvent;

  @Output() page: EventEmitter<PageEvent>

  showFirstLastButtons = true;
  disabled = false;
  hidePageSize = false;


  constructor(private fb: FormBuilder, private http: HttpClient, private matchDataService: MatchDataService) {
    this.playerForm = this.fb.group({});
  }

  ngOnInit() {
    this.playerForm = this.fb.group({
      player1: [''],
      player2: ['']
    });
    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    /*
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        }),
      )
      .subscribe(data => (this.data = data));
      */
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.fetchMatches();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  fetchMatches() {
    const pageSize = !this.paginator ? this.pageSize : this.paginator.pageSize;
    const pageIndex = !this.paginator ? this.pageIndex : this.paginator.pageIndex;

    const player1 = this.myControl1.value;
    const player2 = this.myControl2.value;
    console.log(player1,player2);
    
    if (player1 && player2 && player1 !== player2) {
      // this.http.get<any[]>(`/api/MatchRecords/matches-between/${player1}/${player2}`)
      //   .subscribe(data => {
      //     this.matches = data;
      //   });
      this.matchDataService.getMatchesBetween(player1, player2, pageSize, pageIndex)
        .subscribe({
          next: (resp) => {
            //const reqHeader = JSON.parse(resp.headers.get("X-Pagination")!);
            //this.resultsLength = reqHeader.totalRecords;
            this.matches = resp.body as Match[];
            
          // alert(this.matchData.heroesUrl);
            console.log(this.matches);
            console.log('break');
            this.isLoadingResults = false;
      }})

    } else {
      alert('Please select two different players.');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.players.filter(option => option.toLowerCase().includes(filterValue));
  }
}
