import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Match } from 'src/app/shared/models/match.model';

export enum Direction {
  FORWARD,
  BACKWARD,
}

@Component({
  selector: 'app-round-selector',
  templateUrl: './round-selector.component.html',
  styleUrls: ['./round-selector.component.css']
})
export class RoundSelectorComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  direction = Direction;

  @Input() matches: Match[] = [];
  @Input() round: number;

  @Output() onChangeRound = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeRound(direction: Direction): void {
    let newRound = this.round;

    if (direction === this.direction.FORWARD) {
      newRound++;
    }

    if (direction === this.direction.BACKWARD) {
      newRound--;
    }

    if (newRound > 38 || newRound < 1) {
      return;
    }

    this.onChangeRound.emit(newRound);
  }

  get disableForwardBtn(): boolean {
    return this.round === 38 || this.matches.length == 0;
  }

  get disableBackwardBtn(): boolean {
    return this.round === 1 || this.matches.length == 0;
  }

}
