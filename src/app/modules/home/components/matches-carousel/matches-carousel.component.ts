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

  @Output() onChangeRound = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onBackRound(): void {
    console.log('Going back');

    const newRound = this.round - 1;

    if (newRound > 38 || newRound < 1) {
      return;
    }

    this.onChangeRound.emit(newRound);

  }

  onForwardRound(): void {
    console.log('Going forward');

    const newRound = this.round + 1;

    if (newRound > 38 || newRound < 1) {
      return;
    }

    this.onChangeRound.emit(newRound);
  }
}
