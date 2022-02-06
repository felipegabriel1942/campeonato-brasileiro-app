import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  seasons: number[] = [2021, 2020, 2019];
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
    this.getClassification();
    this.getMatches();
  }

  getClassification(): void {
    this.classification = [];

    this.classificationService
      .findClassificationBySeason(
        this.form.get('season').value,
        this.form.get('division').value
      )
      .subscribe((res) => {
        this.classification = res;
      });

    this.updateMatches(38);
  }

  updateMatches(newRound: number): void {
    this.round = newRound;
    this.getMatches();
  }

  getMatches(): void {
    this.matches = [];

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
