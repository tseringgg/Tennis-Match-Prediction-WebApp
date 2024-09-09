import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchTableComponent } from "./match-table/match-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatchTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tennis-mp-client';
}
