import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() match: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
