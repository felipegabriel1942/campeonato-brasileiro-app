import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { finalize } from 'rxjs/operators';

import { ClassificationService } from 'src/app/core/http/classification.service';
import { MatchService } from 'src/app/core/http/match.service';
import { Classification } from 'src/app/shared/models/classification.model';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  classification: Classification[] = [];
  matches: Match[] = [];
  round: number = 38;
  seasons: number[] = [];
  divisions: string[] = ['A', 'B'];
  form: FormGroup = new FormGroup({
    season: new FormControl(2021),
    division: new FormControl('a'),
  });

  constructor(
    private classificationService: ClassificationService,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.setInitialInfo();
  }

  setInitialInfo(): void {
    this.matchService.findSeasons().subscribe((res) => {
      if (res.length > 0) {
        this.seasons = res;
        this.getClassification();
        this.getMatches();
      } else {
        const actualSeason = new Date().getFullYear();
        this.seasons = [actualSeason];
      }
    });
  }

  getClassification(): void {
    this.classificationService
      .findClassificationBySeason(
        this.form.get('season').value,
        this.form.get('division').value
      )
      .pipe(
        finalize(() => {
          this.updateMatches();
        })
      )
      .subscribe(
        (res) => {
          this.classification = res;
        },
        (error) => {
          this.classification = [];
        }
      );
  }

  updateMatches(newRound: number = 38): void {
    this.round = newRound;
    this.getMatches();
  }

  getMatches(): void {
    this.matchService
      .findMatches(
        this.form.get('season').value,
        this.form.get('division').value,
        this.round
      )
      .subscribe((res) => {
        this.matches = res;
      });
  }
}
