import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';
@Component({
  selector: 'app-matches-carousel',
  templateUrl: './matches-carousel.component.html',
  styleUrls: ['./matches-carousel.component.css'],
})
export class MatchesCarouselComponent implements OnInit {
  @Input() matches: Match[] = [];
  @Input() round: number;

  @Output() roundChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
